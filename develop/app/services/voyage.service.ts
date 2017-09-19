import { Injectable } from '@angular/core';
import { Voyage } from './../models/voyage'

@Injectable()
export class VoyageService {
    public getVoyages(pageNo: number = 1, filter: string = null): Voyage[] {

        return [
            {
                agentName: "Peyvand Darya",
                lineName: "Sea Nav Bar",
                vessel: "Einzel 1",
                voyageNo: "23 a",
                eta: new Date(2017, 2, 11),
            },
            {
                agentName: "Peyvand Darya",
                lineName: "Sea Nav Bar",
                vessel: "Einzel 2",
                voyageNo: "24 b",
                eta: new Date(2018, 1, 10),
            },
            {
                agentName: "Peyvand Darya",
                lineName: "Sea Nav Bar",
                vessel: "Einzel 3",
                voyageNo: "26 b",
                eta: new Date(2018, 2, 24),
            },
            {
                agentName: "Peyvand Darya",
                lineName: "Sea Nav Bar",
                vessel: "Einzel 4",
                voyageNo: "27 b",
                eta: new Date(2018, 3, 24),
            },
        ];
    }


}
