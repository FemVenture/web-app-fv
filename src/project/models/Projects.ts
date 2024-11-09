export type Project = {
    id: number,
    title: string,
    description: string,
    start_date: string,
    end_date: string,
    total_funding_goal: number,
    funds_raised: number,
    status: string,
    tag: string,
    text: string,
    entrepreneurId: number,
}

export type Projects = Project[];
