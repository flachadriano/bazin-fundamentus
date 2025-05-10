import axios from "axios";

export class FundamentusRepository {
    getCompanyList() {
        axios.get('https://fundamentus.com.br/detalhes.php?papel=SEER3', {
            headers: { 
                'Access-Control-Allow-Origin': '*'
            }})
            .then(res => console.log(res));
    }
}
