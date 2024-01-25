import { http, HttpResponse, delay } from "msw";
import accountsData from "./accounts.json";

export const handlers = [
  http.get("/api/accounts/:accountId", async ({ params }) => {
    await delay(2000);
    const { accountId } = params;
    return HttpResponse.json(
      accountsData.find((account) => account.id === parseInt(accountId)),
      { status: 200 }
    );
  }),
  http.get("/api/accounts", async ({ request }) => {
    await delay(2000);
    const url = new URL(request.url);
    let searchTerms = url.searchParams.get("searchTerms");
    if (!searchTerms) {
      return new HttpResponse(null, { status: 404 });
    }
    searchTerms = searchTerms.trim().toLowerCase();
    const searchedAccounts = accountsData.filter((account) => {
      return account.name.toLowerCase().includes(searchTerms);
    });
    return HttpResponse.json(searchedAccounts, { status: 200 });
  }),
  http.get("/api/accounts", async () => {
    await delay(2000);
    return HttpResponse.json(
      accountsData.map((account) => ({
        id: account.id,
        name: account.name,
        avt: account.avt,
      })),
      { status: 200 }
    );
  }),
];
