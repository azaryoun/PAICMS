export class Voyage {
    constructor(
        public voyageNo: string,
        public vessel: string,
        public agentName: string,
        public lineName: string,
        public eta: Date,
    ) { }
}
