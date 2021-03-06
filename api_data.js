define({ "api": [
  {
    "type": "post",
    "url": "/auth/token",
    "title": "Get JWT login token",
    "name": "Login",
    "group": "Auth",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "username",
            "description": "<p>User's username.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "password",
            "description": "<p>User's password.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example: ",
          "content": "{\n    username: \"xyz\", \n    password: \"123\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "accessToken",
            "description": "<p>Signed JWT token to use for login.</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/index.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "/campaigns",
    "title": "Get JWT login token",
    "name": "Add_Campaign",
    "group": "Campaigns",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "campaignName",
            "description": "<p>Name of new campaign.</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "textBody",
            "description": "<p>Body of the text to send to whatsapp user.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example: ",
          "content": "{\n    campaignName: \"Campaign 1\", \n    textBody: \"This is a new campaign\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "optional": false,
            "field": "empty",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/index.js",
    "groupTitle": "Campaigns"
  },
  {
    "type": "get",
    "url": "/campaigns",
    "title": "Get All Campaigns",
    "name": "Get_All_Campaigns",
    "group": "Campaigns",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "campaigns",
            "description": "<p>List of all campaigns</p>"
          }
        ],
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "campaign_id",
            "description": "<p>Unique id of campaigns</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "name",
            "description": "<p>Name of campaign</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "body",
            "description": "<p>Body of the text to send to whatsapp user.</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "date_created",
            "description": "<p>Date when the campaign was created</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/index.js",
    "groupTitle": "Campaigns"
  },
  {
    "type": "post",
    "url": "/campaigns/:id/sendMessage",
    "title": "Send campaign messages to a list of contact numbers",
    "name": "Send_Campaign_Messages",
    "group": "Campaigns",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "id",
            "description": "<p>ID of the campaign</p>"
          },
          {
            "group": "Parameter",
            "type": "String[]",
            "optional": false,
            "field": "phoneNumbers",
            "description": "<p>An array of phone numbers to send the campaign message to.</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example: ",
          "content": "[\"123\",\"234\",\"566\"]",
          "type": "String[]"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "optional": false,
            "field": "empty",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/index.js",
    "groupTitle": "Campaigns"
  },
  {
    "type": "post",
    "url": "/contacts",
    "title": "Import contacts from a csv file",
    "name": "Add_Contacts",
    "group": "Contacts",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "File",
            "optional": false,
            "field": "file",
            "description": "<p>CSV file containing all contacts to import</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "optional": false,
            "field": "empty",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/index.js",
    "groupTitle": "Contacts"
  },
  {
    "type": "get",
    "url": "/contacts",
    "title": "Get all contacts imported through dashboard",
    "name": "Get_Contacts",
    "group": "Contacts",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object[]",
            "optional": false,
            "field": "contacts",
            "description": "<p>List of all contacts</p>"
          }
        ],
        "Success 200": [
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "contact_id",
            "description": "<p>Unique id of contact</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "f_name",
            "description": "<p>First Name of contact</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "l_name",
            "description": "<p>Last Name of contact</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "phone",
            "description": "<p>Phone number of contact</p>"
          },
          {
            "group": "Success 200",
            "type": "String",
            "optional": false,
            "field": "is_phone_valid",
            "description": "<p>Whether phone number of contact is valid or not</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/index.js",
    "groupTitle": "Contacts"
  },
  {
    "type": "get",
    "url": "/account/me",
    "title": "Get logged in user's info",
    "name": "UserInformation",
    "group": "User",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "user",
            "description": "<p>Logged in user's personal information</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/index.js",
    "groupTitle": "User"
  },
  {
    "type": "get",
    "url": "/whatsapp/contacts",
    "title": "Get logged in whatsapp user's contacts",
    "name": "Get_Contacts",
    "group": "Whatsapp",
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "Object",
            "optional": false,
            "field": "contacts",
            "description": "<p>Logged in whatsapp user's contacts</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/index.js",
    "groupTitle": "Whatsapp"
  },
  {
    "type": "post",
    "url": "/whatsapp/messageStatus",
    "title": "Send message to whatsapp number",
    "name": "Get_Message_Status",
    "group": "Whatsapp",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>Whatsapp number for which status needs to be retrieved</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example: ",
          "content": "{\n    number: \"+12312312312\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "type": "String",
            "optional": false,
            "field": "status",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/index.js",
    "groupTitle": "Whatsapp"
  },
  {
    "type": "post",
    "url": "/whatsapp/sendMessage",
    "title": "Send message to whatsapp number",
    "name": "Send_Message",
    "group": "Whatsapp",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "message",
            "description": "<p>Message string to send to the contact</p>"
          },
          {
            "group": "Parameter",
            "type": "String",
            "optional": false,
            "field": "number",
            "description": "<p>Whatsapp number to send the message</p>"
          }
        ]
      },
      "examples": [
        {
          "title": "Request-Example: ",
          "content": "{\n    message: \"This is a text message\", \n    number: \"+123456777\"\n}",
          "type": "json"
        }
      ]
    },
    "success": {
      "fields": {
        "200": [
          {
            "group": "200",
            "optional": false,
            "field": "empty",
            "description": ""
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "src/routes/index.js",
    "groupTitle": "Whatsapp"
  }
] });
