import { FundamentusRepository } from "../repository/FundamentusRepository";

export class BazinService {
    repository = new FundamentusRepository();

    getList() {
        this.repository.getCompanyList();
        return 'list';
    }
}