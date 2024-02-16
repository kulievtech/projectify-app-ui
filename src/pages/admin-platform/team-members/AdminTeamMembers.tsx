import { useEffect, useState } from "react";
import { NoDataPlaceholder, Page, PageContent } from "../../components";
import { CreateTeamMemberModal } from "./CreateTeamMemberModal";
import noTeamMember from "../../../assets/illustrations/no-team-member.svg";
import { useStore } from "../../../hooks";
import { adminTeamMemberService } from "../../../api";
import { Actions, AdminPopulateTeamMembersAction } from "../../../store";
import toast from "react-hot-toast";
import { PageHeader } from "../../components";
import { TeamMemberFilters } from "./TeamMemberFilters";
import { TeamMembersTable } from "./TeamMembersTable";
import { Option, OptionValue } from "../../../design-system";
import { TeamMember } from "../../../types";

const AdminTeamMembers = () => {
    const [showCreateTeamMemberModal, setShowCreateTeamMemberModal] =
        useState(false);

    const [status, setStatus] = useState<OptionValue>();

    const handleSetStatus = (value: Option) => {
        setStatus(value.value);
    };

    const [isTeamMembersFetching, setIsTeamMembersFetching] = useState(true);
    const {
        state: { teamMembers },
        dispatch
    } = useStore();

    const handleSortByStatus = (status: OptionValue) => {
        let sortedTeamMembers: TeamMember[] = [];

        if (status === "ACTIVE") {
            const activeMembers = teamMembers.filter(
                (teamMember) => teamMember.status === "ACTIVE"
            );
            const otherMembers = teamMembers.filter(
                (teamMember) => teamMember.status !== "ACTIVE"
            );
            sortedTeamMembers = [...activeMembers, ...otherMembers];
        } else if (status === "INACTIVE") {
            const inactiveMembers = teamMembers.filter(
                (teamMember) => teamMember.status === "INACTIVE"
            );
            const otherMembers = teamMembers.filter(
                (teamMember) => teamMember.status !== "INACTIVE"
            );
            sortedTeamMembers = [...inactiveMembers, ...otherMembers];
        } else if (status === "DEACTIVATED") {
            const deactivatedMembers = teamMembers.filter(
                (teamMember) => teamMember.status === "DEACTIVATED"
            );
            const otherMembers = teamMembers.filter(
                (teamMember) => teamMember.status !== "DEACTIVATED"
            );
            sortedTeamMembers = [...deactivatedMembers, ...otherMembers];
        } else if (status === "DEFAULT") {
            return teamMembers;
        }
        return sortedTeamMembers;
    };

    useEffect(() => {
        adminTeamMemberService
            .getAll()
            .then((data) => {
                const action: AdminPopulateTeamMembersAction = {
                    type: Actions.ADMIN_POPULATE_TEAM_MEMBERS,
                    payload: data.data
                };
                dispatch(action);
                setIsTeamMembersFetching(false);
            })
            .catch((e) => {
                const err = e as Error;
                setIsTeamMembersFetching(false);
                toast.error(err.message);
            });
    }, []);

    if (isTeamMembersFetching) return null;

    const sortedTeamMembers = status ? handleSortByStatus(status) : teamMembers;

    return (
        <Page>
            {!teamMembers.length ? (
                <NoDataPlaceholder
                    illustrationUrl={noTeamMember}
                    text="You don’t have any team members yet!"
                    buttonText="Add a Team Member"
                    buttonAction={() => setShowCreateTeamMemberModal(true)}
                ></NoDataPlaceholder>
            ) : (
                <PageContent>
                    <PageHeader
                        pageTitle="Team Members"
                        actionButtonText="Create A Member"
                        actionButtonOnClick={() =>
                            setShowCreateTeamMemberModal(true)
                        }
                    />
                    <TeamMemberFilters
                        status={status}
                        handleSetStatus={handleSetStatus}
                    />
                    <TeamMembersTable data={sortedTeamMembers} />
                </PageContent>
            )}
            <CreateTeamMemberModal
                show={showCreateTeamMemberModal}
                closeModal={() => setShowCreateTeamMemberModal(false)}
            />
        </Page>
    );
};

export { AdminTeamMembers };
