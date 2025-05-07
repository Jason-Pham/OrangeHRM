// env.d.ts
declare namespace NodeJS {
    interface ProcessEnv {
      TEST_URL: string;
      MAIN_PAGE_TITLE: string;
      ADMIN_USERNAME: string;
      ADMIN_PASSWORD: string;
      SEARCH_TEST: string;
    }
  }
  