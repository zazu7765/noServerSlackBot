const { App } = require('@slack/bolt');
const tokens = require("./tokens.json");
var dateTime = require('get-date');
const app = new App({
    token: tokens.SLACK_TOKEN, 
    appToken: tokens.APP_TOKEN,
    socketMode: true,
  });
  
  (async () => {
    await app.start();
    console.log('daniel is a genius and servers dont matter');
  })();
  
  const date = "March 16, 2021"
  app.event('app_mention', async ({ event, context, client, say }) => {
    try {
      await say({
        "blocks": [
            {
                "type": "header",
                "text": {
                    "type": "plain_text",
                    "text": ":bookmark_tabs:  Available Classes  :bookmark_tabs:"
                }
            },
            {
                "type": "context",
                "elements": [
                    {
                        "text": `*${date}*  |  Crafts for Charity`,
                        "type": "mrkdwn"
                    }
                ]
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "*What Classes Are You Interested In?*"
                },
                "accessory": {
                    "type": "checkboxes",
                    "options": [
                        {
                            "text": {
                                "type": "mrkdwn",
                                "text": "Knitting for Beginners"
                            },
                            "value": "value-0"
                        },
                        {
                            "text": {
                                "type": "mrkdwn",
                                "text": "Knitting Beyond Basics"
                            },
                            "value": "value-1"
                        },
                        {
                            "text": {
                                "type": "mrkdwn",
                                "text": "Crocheting for Beginners"
                            },
                            "value": "value-2"
                        }
                    ],
                    "action_id": "checkboxes-action"
                }
            },
            {
                "type": "divider"
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": " :blue_book: *Knitting for Beginners* :blue_book:"
                }
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "Student Name | Time & Date"
                },
                "accessory": {
                    "type": "button",
                    "text": {
                        "type": "plain_text",
                        "text": "Sign Up",
                        "emoji": true
                    }
                }
            },
            {
                "type": "divider"
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": " :green_book: *Knitting Beyond Basics* :green_book:"
                }
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "Student Name | Time & Date"
                },
                "accessory": {
                    "type": "button",
                    "text": {
                        "type": "plain_text",
                        "text": "Sign Up",
                        "emoji": true
                    }
                }
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "Student Name | Time & Date"
                },
                "accessory": {
                    "type": "button",
                    "text": {
                        "type": "plain_text",
                        "text": "Sign Up",
                        "emoji": true
                    },
                    "value": "sign up",
                    "url": "https://google.com",
                    "action_id": "button-action"
                }
            },
            {
                "type": "divider"
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": " :orange_book: *Crocheting for Beginners* :orange_book:"
                }
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "Student Name | Time & Date"
                },
                "accessory": {
                    "type": "button",
                    "text": {
                        "type": "plain_text",
                        "text": "Sign Up",
                        "emoji": true
                    }
                }
            },
            {
                "type": "section",
                "text": {
                    "type": "mrkdwn",
                    "text": "Student Name | Time & Date"
                },
                "accessory": {
                    "type": "button",
                    "text": {
                        "type": "plain_text",
                        "text": "Sign Up",
                        "emoji": true
                    },
                    "value": "sign up",
                    "url": "https://google.com",
                    "action_id": "button-action"
                }
            },
            {
                "type": "divider"
            }
        ]
    });
    }
    catch (error) {
      console.error(error);
    }
  });
  app.shortcut('class_menu', async ({shortcut, ack, client})=>{
      try{
          await ack();
          const result = await client.views.open({
            trigger_id: shortcut.trigger_id,
            view: {
                "type": "modal",
                "title": {
                    "type": "plain_text",
                    "text": "Class Menu",
                    "emoji": true
                },
                "submit": {
                    "type": "plain_text",
                    "text": "Submit",
                    "emoji": true
                },
                "close": {
                    "type": "plain_text",
                    "text": "Cancel",
                    "emoji": true
                },
                "blocks": [
                    {
                        "type": "header",
                        "text": {
                            "type": "plain_text",
                            "text": ":bookmark_tabs:  Available Classes  :bookmark_tabs:"
                        }
                    },
                    {
                        "type": "context",
                        "elements": [
                            {
                                "text": `${dateTime()}  |  Crafts for Charity`,
                                "type": "mrkdwn"
                            }
                        ]
                    },
                    {
                        "type": "section",
                        "text": {
                            "type": "mrkdwn",
                            "text": "What Classes Are You Interested In?"
                        },
                        "accessory": {
                            "type": "checkboxes",
                            "options": [
                                {
                                    "text": {
                                        "type": "mrkdwn",
                                        "text": "Knitting for Beginners"
                                    },
                                    "value": "value-0"
                                },
                                {
                                    "text": {
                                        "type": "mrkdwn",
                                        "text": "Knitting Beyond Basics"
                                    },
                                    "value": "value-1"
                                },
                                {
                                    "text": {
                                        "type": "mrkdwn",
                                        "text": "Crocheting for Beginners"
                                    },
                                    "value": "value-2"
                                }
                            ],
                            "action_id": "checkboxes-action"
                        }
                    },
                    {
                        "type": "divider"
                    },
                    {
                        "type": "section",
                        "text": {
                            "type": "mrkdwn",
                            "text": " :blue_book: Knitting for Beginners :blue_book:"
                        }
                    },
                    {
                        "type": "section",
                        "text": {
                            "type": "mrkdwn",
                            "text": "Student Name | Time & Date"
                        },
                        "accessory": {
                            "type": "button",
                            "text": {
                                "type": "plain_text",
                                "text": "Sign Up",
                                "emoji": true
                            },
                            "value": "sign up",
                            "url": "https://docs.google.com/spreadsheets/d/1iA6Wh31JKgqBVflHOb-gidD91Ru6D43ntzGqHpdLGOI/edit?usp=sharing",
                            "action_id": "button-action"
                        }
                    },
                    {
                        "type": "divider"
                    },
                    {
                        "type": "section",
                        "text": {
                            "type": "mrkdwn",
                            "text": " :green_book: Knitting Beyond Basics :green_book:"
                        }
                    },
                    {
                        "type": "section",
                        "text": {
                            "type": "mrkdwn",
                            "text": "Student Name | Time & Date"
                        },
                        "accessory": {
                            "type": "button",
                            "text": {
                                "type": "plain_text",
                                "text": "Sign Up",
                                "emoji": true
                            },
                            "value": "sign up",
                            "url": "https://docs.google.com/spreadsheets/d/1iA6Wh31JKgqBVflHOb-gidD91Ru6D43ntzGqHpdLGOI/edit?usp=sharing",
                            "action_id": "button-action"
                        }
                    },
                    {
                        "type": "section",
                        "text": {
                            "type": "mrkdwn",
                            "text": "Student Name | Time & Date"
                        },
                        "accessory": {
                            "type": "button",
                            "text": {
                                "type": "plain_text",
                                "text": "Sign Up",
                                "emoji": true
                            },
                            "value": "sign up",
                            "url": "https://docs.google.com/spreadsheets/d/1iA6Wh31JKgqBVflHOb-gidD91Ru6D43ntzGqHpdLGOI/edit?usp=sharing",
                            "action_id": "button-action"
                        }
                    },
                    {
                        "type": "divider"
                    },
                    {
                        "type": "section",
                        "text": {
                            "type": "mrkdwn",
                            "text": " :orange_book: Crocheting for Beginners :orange_book:"
                        }
                    },
                    {
                        "type": "section",
                        "text": {
                            "type": "mrkdwn",
                            "text": "Student Name | Time & Date"
                        },
                        "accessory": {
                            "type": "button",
                            "text": {
                                "type": "plain_text",
                                "text": "Sign Up",
                                "emoji": true
                            },
                            "value": "sign up",
                            "url": "https://docs.google.com/spreadsheets/d/1iA6Wh31JKgqBVflHOb-gidD91Ru6D43ntzGqHpdLGOI/edit?usp=sharing",
                            "action_id": "button-action"
                        }
                    },
                    {
                        "type": "section",
                        "text": {
                            "type": "mrkdwn",
                            "text": "Student Name | Time & Date"
                        },
                        "accessory": {
                            "type": "button",
                            "text": {
                                "type": "plain_text",
                                "text": "Sign Up",
                                "emoji": true
                            },
                            "value": "sign up",
                            "url": "https://docs.google.com/spreadsheets/d/1iA6Wh31JKgqBVflHOb-gidD91Ru6D43ntzGqHpdLGOI/edit?usp=sharing",
                            "action_id": "button-action"
                        }
                    },
                    {
                        "type": "divider"
                    }
                ]
            }
          });
      
          console.log(result);
        }
        catch (error) {
          console.error(error);
        }});