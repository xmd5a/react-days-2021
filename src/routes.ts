import { FetchApiFunctionalComponent } from "./FetchApiFunctionalComponent";
import { FetchApiClassComponent } from "./FetchApiClassComponent";
import { FetchApiMemoryLeak } from "./FetchApiMemoryLeak";
import { QueryComponent } from "./QueryComponent";
import { MultipleQueryComponent } from "./MultipleQueryComponent";
import { MutationComponent } from "./MutationComponent";

export const routes = [
  {
    title: "fetch api functional component",
    route: "/fetch-api-functional-component",
    component: FetchApiFunctionalComponent
  },
  {
    title: "fetch api class component",
    route: "/fetch-api-class-component",
    component: FetchApiClassComponent
  },
  {
    title: "memory leak error-prone solution",
    route: "/memory-leak-error-prone-solution",
    component: FetchApiMemoryLeak
  },
  {
    title: "Query component",
    route: "/query-component",
    component: QueryComponent
  },
  {
    title: "Multiple Query component",
    route: "/multiple-query-component",
    component: MultipleQueryComponent
  },
  {
    title: "Mutation component",
    route: "/mutation-component",
    component: MutationComponent
  }
];
