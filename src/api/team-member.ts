type SignUpInput = {
    email: string;
    password: string;
    passwordConfirm: string;
};

type SignInInput = {
    email: string;
    password: string;
};

class TeamMember {
    url: string;
    constructor() {
        this.url = `${
            process.env.NODE_ENV === "development"
                ? process.env.REACT_APP_PROJECTIFY_API_URL_LOCAL
                : process.env.REACT_APP_PROJECTIFY_API_URL
        }/team-members`;
    }
    async signUp(input: SignUpInput, inviteToken: string) {
        try {
            const response = await fetch(
                `${this.url}/create-password?inviteToken=${inviteToken}`,
                {
                    method: "PATCH",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(input)
                }
            );
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message);
            }
            return response.json();
        } catch (error) {
            throw error;
        }
    }

    async signIn(input: SignInInput) {
        try {
            const response = await fetch(`${this.url}/login`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(input)
            });
            if (!response.ok) {
                const data = await response.json();
                throw new Error(data.message);
            }

            return response.json();
        } catch (error) {
            throw error;
        }
    }
}

export const teamMember = new TeamMember();
