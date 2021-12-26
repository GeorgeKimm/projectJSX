import React from "react";
import { ListsPolygons } from "./listsPolygons";

const arr = [
  {
    id: 7,
    speedTestUser: {
      id: 206,
      carNumber: "707MEX01",
    },
    calibrator: {
      id: 9338,
      fullName: "Бакиргалиева Бибигуль",
    },
    polygon: [
      [51.157254, 71.427213],
      [51.131424, 71.48864],
      [51.081661, 71.428929],
      [51.12518, 71.371276],
      [51.157254, 71.427213],
    ],
    locations: [
      {
        id: 119,
        lat: "51.08631891536365",
        lon: "71.4238461674112",
        title: "ЛУ 84 пр. Мәңгілік Ел ЖК Promenad expo 2",
        cameras: [
          {
            id: 573,
            status: "В работе",
            roadLane: "1 полоса",
            ipAddress: "10.201.5.51",
          },
          {
            id: 574,
            status: "В работе",
            roadLane: "1 полоса",
            ipAddress: "10.201.5.50",
          },
          {
            id: 575,
            status: "Завершено",
            roadLane: "1 полоса",
            ipAddress: "10.201.5.53",
          },
          {
            id: 576,
            status: "Завершено",
            roadLane: "2 полоса",
            ipAddress: "10.201.5.52",
          },
          {
            id: 6728,
            status: "Завершено",
            roadLane: "2 полоса",
            ipAddress: "10.242.4.10",
          },
        ],
      },
      {
        id: 141,
        lat: "51.126657030545445",
        lon: "71.47638382154878",
        title: "П 31 пр. Р.Қошқарбаев - ул. Қ.Аманжолов",
        cameras: [
          {
            id: 759,
            status: "Создано",
            roadLane: "2 полоса",
            ipAddress: "10.200.3.195",
          },
          {
            id: 760,
            status: "Создано",
            roadLane: "2 полоса",
            ipAddress: "10.200.3.194",
          },
          {
            id: 761,
            status: "Создано",
            roadLane: "2 полоса",
            ipAddress: "10.200.3.196",
          },
          {
            id: 762,
            status: "Возобновить тест",
            roadLane: "2 полоса",
            ipAddress: "10.200.3.197",
          },
          {
            id: 763,
            status: "Возобновить тест",
            roadLane: "3 полоса",
            ipAddress: "10.200.3.198",
          },
          {
            id: 764,
            status: "Возобновить тест",
            roadLane: "3 полоса",
            ipAddress: "10.200.3.199",
          },
          {
            id: 765,
            status: "Возобновить тест",
            roadLane: "3 полоса",
            ipAddress: "10.200.3.200",
          },
        ],
      },
      {
        id: 238,
        lat: "51.14235967239305",
        lon: "71.41954060479225",
        title:
          "ЛУ 152 пр.Қабанбай батыр- СШ  №17- со стороны заправки NomadOil",
        cameras: [
          {
            id: 1471,
            status: "Создано",
            roadLane: "3 полоса",
            ipAddress: "10.201.9.98",
          },
          {
            id: 1472,
            status: "Создано",
            roadLane: "3 полоса",
            ipAddress: "10.201.9.99",
          },
          {
            id: 1473,
            status: "Создано",
            roadLane: "3 полоса",
            ipAddress: "10.201.9.100",
          },
          {
            id: 1474,
            status: "Создано",
            roadLane: "3 полоса",
            ipAddress: "10.201.9.101",
          },
        ],
      },
    ],
  },
  {
    id: 8,
    speedTestUser: {
      id: 206,
      carNumber: "007BLM01",
    },
    calibrator: {
      id: 9338,
      fullName: "Антоненко Дмитрий",
    },
    polygon: [
      [51.157254, 71.427213],
      [51.131424, 71.48864],
      [51.081661, 71.428929],
      [51.12518, 71.371276],
      [51.157254, 71.427213],
    ],
    locations: [
      {
        id: 119,
        lat: "51.08631891536365",
        lon: "71.4238461674112",
        title: "ЛУ 84 пр. Мәңгілік Ел ЖК Promenad expo 2",
        cameras: [
          {
            id: 573,
            status: "В работе",
            roadLane: "1 полоса",
            ipAddress: "10.201.5.51",
          },
          {
            id: 574,
            status: "В работе",
            roadLane: "1 полоса",
            ipAddress: "10.201.5.50",
          },
          {
            id: 575,
            status: "Завершено",
            roadLane: "1 полоса",
            ipAddress: "10.201.5.53",
          },
          {
            id: 576,
            status: "Завершено",
            roadLane: "2 полоса",
            ipAddress: "10.201.5.52",
          },
          {
            id: 6728,
            status: "Завершено",
            roadLane: "2 полоса",
            ipAddress: "10.242.4.10",
          },
        ],
      },
      {
        id: 141,
        lat: "51.126657030545445",
        lon: "71.47638382154878",
        title: "П 31 пр. Р.Қошқарбаев - ул. Қ.Аманжолов",
        cameras: [
          {
            id: 759,
            status: "Создано",
            roadLane: "2 полоса",
            ipAddress: "10.200.3.195",
          },
          {
            id: 760,
            status: "Создано",
            roadLane: "2 полоса",
            ipAddress: "10.200.3.194",
          },
          {
            id: 761,
            status: "Создано",
            roadLane: "2 полоса",
            ipAddress: "10.200.3.196",
          },
          {
            id: 762,
            status: "Возобновить тест",
            roadLane: "2 полоса",
            ipAddress: "10.200.3.197",
          },
          {
            id: 763,
            status: "Возобновить тест",
            roadLane: "3 полоса",
            ipAddress: "10.200.3.198",
          },
          {
            id: 764,
            status: "Возобновить тест",
            roadLane: "3 полоса",
            ipAddress: "10.200.3.199",
          },
          {
            id: 765,
            status: "Возобновить тест",
            roadLane: "3 полоса",
            ipAddress: "10.200.3.200",
          },
        ],
      },
      {
        id: 238,
        lat: "51.14235967239305",
        lon: "71.41954060479225",
        title:
          "ЛУ 152 пр.Қабанбай батыр- СШ  №17- со стороны заправки NomadOil",
        cameras: [
          {
            id: 1471,
            status: "Создано",
            roadLane: "3 полоса",
            ipAddress: "10.201.9.98",
          },
          {
            id: 1472,
            status: "Создано",
            roadLane: "3 полоса",
            ipAddress: "10.201.9.99",
          },
          {
            id: 1473,
            status: "Создано",
            roadLane: "3 полоса",
            ipAddress: "10.201.9.100",
          },
          {
            id: 1474,
            status: "Создано",
            roadLane: "3 полоса",
            ipAddress: "10.201.9.101",
          },
        ],
      },
    ],
  },
];

export function ListPolygonTest() {
  return <ListsPolygons arr={arr} />;
}
