import { MatchInfo } from "../types/MatchInfo";

export class MockData {
  findOneMatch(): MatchInfo {
    return {
      id: "partida_1",
      campeonato: {
        nome: "Brasileirao",
        logo_url:
          "https://imgs.search.brave.com/iiAchlywX-ZfYaB2iYN2NBsdqYOCgoiTH0Qyq7ewmWQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/c3BuZy5vcmcvZG93/bmxvYWQvYnJhc2ls/ZWlyYW8tc2VyaWUt/YS9sb2dvLWJyYXNp/bGVpcmFvLTIwNDgu/cG5n",
        id: "campeonato-1",
      },
      rodada: "2",
      horario: "29/11/2024",
      dia: "29/11/2024",
      time_a: {
        logo_url:
          "https://imgs.search.brave.com/bn5fS70JMoIQTBz5Ltnr_KoBJ0wqdrDenNtu01uBg7c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE3/LzAyL2NydXplaXJv/LWxvZ28tZXNjdWRv/LS5wbmc",
        nome: "Cruzeiro",
        placar: "1",
        id: "1",
      },
      time_b: {
        logo_url:
          "https://imgs.search.brave.com/wKYyAUfncwg24_em7a1-JKA9ir1b3GF5dXSkqnK-oM4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9hdGxldGljby1t/aW5laXJvLW1nLTEu/c3Zn",
        nome: "Atletico MG",
        placar: "5",
        id: "2",
      },
      emissoras: [],
      status: "agendado",
      tempo: null,
      utcDate: new Date().getUTCDate().toString(),
      estadio: "",
    };
  }

  getTodayMatches(): MatchInfo[] {
    return [
      {
        id: "partida_1",
        campeonato: {
          nome: "Brasileirao",
          logo_url:
            "https://imgs.search.brave.com/iiAchlywX-ZfYaB2iYN2NBsdqYOCgoiTH0Qyq7ewmWQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/c3BuZy5vcmcvZG93/bmxvYWQvYnJhc2ls/ZWlyYW8tc2VyaWUt/YS9sb2dvLWJyYXNp/bGVpcmFvLTIwNDgu/cG5n",
          id: "campeonato-1",
        },
        rodada: "2",
        horario: "29/11/2024",
        dia: "29/11/2024",
        time_a: {
          logo_url:
            "https://imgs.search.brave.com/bn5fS70JMoIQTBz5Ltnr_KoBJ0wqdrDenNtu01uBg7c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE3/LzAyL2NydXplaXJv/LWxvZ28tZXNjdWRv/LS5wbmc",
          nome: "Cruzeiro",
          placar: "1",
          id: "1",
        },
        time_b: {
          logo_url:
            "https://imgs.search.brave.com/wKYyAUfncwg24_em7a1-JKA9ir1b3GF5dXSkqnK-oM4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9hdGxldGljby1t/aW5laXJvLW1nLTEu/c3Zn",
          nome: "Atletico MG",
          placar: "5",
          id: "2",
        },
        emissoras: [],
        status: "finalizado",
        tempo: null,
        utcDate: new Date().getUTCDate().toString(),
        estadio: "",
      },
    ];
  }

  getTomorrowMatches(): MatchInfo[] {
    return [
      {
        id: "partida_1",
        campeonato: {
          nome: "Brasileirao",
          logo_url:
            "https://imgs.search.brave.com/iiAchlywX-ZfYaB2iYN2NBsdqYOCgoiTH0Qyq7ewmWQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/c3BuZy5vcmcvZG93/bmxvYWQvYnJhc2ls/ZWlyYW8tc2VyaWUt/YS9sb2dvLWJyYXNp/bGVpcmFvLTIwNDgu/cG5n",
          id: "campeonato-1",
        },
        rodada: "2",
        horario: "29/11/2024",
        dia: "29/11/2024",
        time_a: {
          logo_url:
            "https://imgs.search.brave.com/bn5fS70JMoIQTBz5Ltnr_KoBJ0wqdrDenNtu01uBg7c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE3/LzAyL2NydXplaXJv/LWxvZ28tZXNjdWRv/LS5wbmc",
          nome: "Cruzeiro",
          placar: "1",
          id: "1",
        },
        time_b: {
          logo_url:
            "https://imgs.search.brave.com/wKYyAUfncwg24_em7a1-JKA9ir1b3GF5dXSkqnK-oM4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9hdGxldGljby1t/aW5laXJvLW1nLTEu/c3Zn",
          nome: "Atletico MG",
          placar: "5",
          id: "2",
        },
        emissoras: [],
        status: "finalizado",
        tempo: null,
        utcDate: new Date().getUTCDate().toString(),
        estadio: "",
      },
    ];
  }

  getYesterdayMatches(): MatchInfo[] {
    return [
      {
        id: "partida_1",
        campeonato: {
          nome: "Brasileirao",
          logo_url:
            "https://imgs.search.brave.com/iiAchlywX-ZfYaB2iYN2NBsdqYOCgoiTH0Qyq7ewmWQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/c3BuZy5vcmcvZG93/bmxvYWQvYnJhc2ls/ZWlyYW8tc2VyaWUt/YS9sb2dvLWJyYXNp/bGVpcmFvLTIwNDgu/cG5n",
          id: "campeonato-1",
        },
        rodada: "2",
        horario: "29/11/2024",
        dia: "29/11/2024",
        time_a: {
          logo_url:
            "https://imgs.search.brave.com/bn5fS70JMoIQTBz5Ltnr_KoBJ0wqdrDenNtu01uBg7c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE3/LzAyL2NydXplaXJv/LWxvZ28tZXNjdWRv/LS5wbmc",
          nome: "Cruzeiro",
          placar: "1",
          id: "1",
        },
        time_b: {
          logo_url:
            "https://imgs.search.brave.com/wKYyAUfncwg24_em7a1-JKA9ir1b3GF5dXSkqnK-oM4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9hdGxldGljby1t/aW5laXJvLW1nLTEu/c3Zn",
          nome: "Atletico MG",
          placar: "5",
          id: "2",
        },
        emissoras: [],
        status: "finalizado",
        tempo: null,
        utcDate: new Date().getUTCDate().toString(),
        estadio: "",
      },
    ];
  }

  findLiveMatches(): MatchInfo[] {
    return [
      {
        id: "partida_1",
        campeonato: {
          nome: "Brasileirao",
          logo_url:
            "https://imgs.search.brave.com/iiAchlywX-ZfYaB2iYN2NBsdqYOCgoiTH0Qyq7ewmWQ/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/c3BuZy5vcmcvZG93/bmxvYWQvYnJhc2ls/ZWlyYW8tc2VyaWUt/YS9sb2dvLWJyYXNp/bGVpcmFvLTIwNDgu/cG5n",
          id: "campeonato-1",
        },
        rodada: "2",
        horario: "29/11/2024",
        dia: "29/11/2024",
        time_a: {
          logo_url:
            "https://imgs.search.brave.com/bn5fS70JMoIQTBz5Ltnr_KoBJ0wqdrDenNtu01uBg7c/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9sb2dv/ZG93bmxvYWQub3Jn/L3dwLWNvbnRlbnQv/dXBsb2Fkcy8yMDE3/LzAyL2NydXplaXJv/LWxvZ28tZXNjdWRv/LS5wbmc",
          nome: "Cruzeiro",
          placar: "1",
          id: "1",
        },
        time_b: {
          logo_url:
            "https://imgs.search.brave.com/wKYyAUfncwg24_em7a1-JKA9ir1b3GF5dXSkqnK-oM4/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9jZG4u/d29ybGR2ZWN0b3Js/b2dvLmNvbS9sb2dv/cy9hdGxldGljby1t/aW5laXJvLW1nLTEu/c3Zn",
          nome: "Atletico MG",
          placar: "5",
          id: "2",
        },
        emissoras: [],
        status: "andamento",
        tempo: null,
        utcDate: new Date().getUTCDate().toString(),
        estadio: "",
      },
    ];
  }
}
