import HomeIcon from "@mui/icons-material/Home";
import ApartmentIcon from "@mui/icons-material/Apartment";
import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import GroupIcon from "@mui/icons-material/Group";
import PlagiarismIcon from "@mui/icons-material/Plagiarism";
import StarBorderPurple500Icon from "@mui/icons-material/StarBorderPurple500";
import HistoryIcon from "@mui/icons-material/History";
import { IListItem } from "./listItems";

type NavLinks = {
  title?: string;
  links: IListItem[];
};

export const navLinks: NavLinks[] = [
  {
    title: "Sistema",
    links: [
      {
        label: "Home",
        href: "/home",
        icon: <HomeIcon />,
      },
      {
        label: "Empresas",
        href: "/empresa",
        icon: <ApartmentIcon />,
      },
      {
        label: "Perguntas",
        href: "/pergunta",
        icon: <QuestionAnswerIcon />,
      },
      {
        label: "Funcionarios",
        href: "/funcionario",
        icon: <GroupIcon />,
      },
      {
        label: "Ranking",
        href: "/ranking",
        icon: <StarBorderPurple500Icon />,
      },
      {
        label: "Avaliacao",
        href: "/avaliacao",
        icon: <PlagiarismIcon />,
      },
      {
        label: "Historico",
        href: "/historico",
        icon: <HistoryIcon />,
      },
    ],
  },
];
