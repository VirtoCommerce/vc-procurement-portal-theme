export interface IApprovalWorkFlow {
    id: string;
    roles: IApprovalWorkFlowStep[];
}

export interface IApprovalWorkFlowStep {
    id: string;
    step: number;
    name: string;
}
