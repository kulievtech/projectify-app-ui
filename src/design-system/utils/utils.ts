export const trimWhiteSpaces = (str: string) => {
    return str
        .split(" ")
        .filter((item) => item !== "")
        .join(" ");
};

export const trimInitials = (str: string) => {
    const name = str.split(" ");

    str = name[0].charAt(0) + name[1].charAt(0);

    return str;
};
