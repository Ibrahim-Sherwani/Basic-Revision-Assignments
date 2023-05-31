import { Subscriber } from "./subscriber";
import { NewsStation } from "./newsStation";
import { Article } from "./article";

const newsStation = new NewsStation();

const subscriber1 = new Subscriber(newsStation);
const subscriber2 = new Subscriber(newsStation);

const article1 = new Article("Breaking News", "Breaking NewsBreaking NewsBreaking News");
const article2 = new Article("Technology Update", "Technology UpdateTechnology UpdateTechnology UpdateTechnology UpdateTechnology Update");
newsStation.addArticle(article1);
newsStation.addArticle(article2);

subscriber2.subscribe(newsStation);
subscriber2.unSubscribe();

newsStation.addArticle(article1);
