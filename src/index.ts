import { translate, Translate } from "./translates/translates";
import mainTemplate from "./templates/index.hbs";

import "./index.scss";

class App {
    private translate: Translate;

    public renderApp = (): void => {
        document.addEventListener(
            "DOMContentLoaded",
            (): void => {
                const app: HTMLElement = document.getElementById("app");
                app.innerHTML = mainTemplate(this.translate);
                document.body.appendChild(app);
            },
        );
    };
}

const app = new App().renderApp();


