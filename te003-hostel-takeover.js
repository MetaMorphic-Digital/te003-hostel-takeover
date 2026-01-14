import { registerHostelTakeoverSettings } from "./settings.js";

Hooks.once("init", async function() {
    console.log("torgeternity | Initializing Hostel Takeover Adventure Module");

    //-----system settings
    registerHostelTakeoverSettings()

})
Hooks.on("ready", async function() {
    //----rendering welcome message

    let welcomeMessage = await foundry.applications.handlebars.renderTemplate("modules/te003-hostel-takeover/welcomeMessage.hbs");

    if (game.settings.get("te003-hostel-takeover", "welcomeMessage") == true) {
        let d = new foundry.applications.api.DialogV2({
            title: "Welcome to the Hostel Takeover Adventure Module!",
            content: welcomeMessage,
            buttons: [
                {
                  action: "ok",
                  icon: '<i class="fas fa-check"></i>',
                  label: "OK",
                },
                {
                  action: "hide",
                  icon: '<i class="fas fa-ban"></i>',
                  label: "Don't show again",
                  callback: () =>
                    game.settings.set("te003-hostel-takeover", "welcomeMessage", false),
                },
            ],
            position: {
              left: 100,
              top: 100,
              width: 450
            }
        });
        d.render(true);
    }
})