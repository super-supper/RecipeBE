# RecipeBE 

<details>
<summary>GET:/</summary>

```TEXT
Html landing page
       
```
</details>

<details>
<summary>GET:/recipes</summary>

```JSON
[
    {
        "recipe_id": 8,
        "title": "A New Beef Stew",
        "description": "A delicious old time stew",
        "url": "www.heftyb.com",
        "created_at": "2021-03-14T19:03:57.012Z",
        "updated_at": "2021-03-14T19:03:57.012Z"
    },
    {
        "recipe_id": 7,
        "title": "Beef Stew",
        "description": "A delicious old time stew",
        "url": "www.heftyb.com",
        "created_at": "2021-03-11T06:41:31.537Z",
        "updated_at": "2021-03-11T06:41:31.537Z"
    },
    {
        "recipe_id": 13,
        "title": "Use this for Recipe object reference",
        "description": "A test Recipe to show you what a recipe looks like",
        "url": "www.testthis.com",
        "created_at": "2021-03-14T21:19:20.926Z",
        "updated_at": "2021-03-14T21:19:20.926Z"
    }
]
       
```
</details>

<details>
<summary>GET:/recipes/{id}</summary>

```JSON
{
    "id": 13,
    "title": "Use this for Recipe object reference",
    "description": "A test Recipe to show you what a recipe looks like",
    "url": "www.testthis.com",
    "ingredients": [
        {
            "ingredient": "ingredient 1",
            "qty": "1 million ounces"
        },
        {
            "ingredient": "First born child",
            "qty": "1 whole child"
        }
    ],
    "steps": [
        {
            "step_num": null,
            "step": "First you test it"
        },
        {
            "step_num": null,
            "step": "Then you break it"
        },
        {
            "step_num": null,
            "step": "Then you fix it"
        }
    ],
    "tags": [
        {
            "recipetag_id": 6,
            "tag_id": 1
        },
        {
            "recipetag_id": 7,
            "tag_id": 2
        },
        {
            "recipetag_id": 8,
            "tag_id": 3
        }
    ]
}
       
```
</details>

<details>
<summary>POST:/recipes</summary>

```JSON

{
    "title": "Use this for Recipe object reference",
    "description": "A test Recipe to show you what a recipe looks like",
    "url": null,
    "ingredients": [],
    "steps": [],
    "tags": []
}
```

```JSON

{
    "title" (NOT NULL): "Use this for Recipe object reference", 
    "description" (NOT NULL): "A test Recipe to show you what a recipe looks like",
    "url": "www.testthis.com",
    "ingredients": [
        {
            "ingredient": "ingredient 1",
            "qty": "1 million ounces"
        },
        {
            "ingredient": "First born child",
            "qty": "1 whole child"
        }
    ],
    "steps": [
        {
            "step_num": 1,
            "step": "First you test it"
        },
        {
            "step_num": 2,
            "step": "Then you break it"
        },
        {
            "step_num": 3,
            "step": "Then you fix it"
        }
    ],
    "tags": [
        {
            "tag_id": 1
        },
        {
            "tag_id": 2
        },
        {
            "tag_id": 3
        }
    ]
}

```

```JSON
{
    "status": 201,
    "body": "created recipe_id"
}
```

</details>

<details>
<summary>DELETE:/recipes/{id}</summary>

```TEXT
{
    status: 200,
    body: "Success!"
}
```

</details>

<details>
<summary>GET:/tags</summary>

```JSON
[
    {
        "tag_id": 2,
        "tag": "Homestyle"
    },
    {
        "tag_id": 1,
        "tag": "Soups & Stews"
    },
    {
        "tag_id": 3,
        "tag": "Third tag"
    }
]
```

</details>

<details>
<summary>POST:/tags</summary>


```JSON
{
    "tag": "New tag"
}
```


```TEXT
{
    status: 201,
    body: "Success!"
}
```

</details>

<details>
<summary>DELETE:/tags/{id}</summary>

```TEXT
{
    status: 200,
    body: "Success!"
}
```

</details>

<details>
<summary>GET:/recipes/tags/{id}</summary>

```JSON
[
    {
        "recipetag_id": 6,
        "tag_id": 1
    },
    {
        "recipetag_id": 7,
        "tag_id": 2
    },
    {
        "recipetag_id": 8,
        "tag_id": 3
    }
]
```

</details>

<details>
<summary>POST:/recipes/tags</summary>

```JSON
{
    "recipe_id": 7,
    "tag_id": 1
}
```

```TEXT
{
    status: 201,
    body: "Success!"
}
```

</details>

<details>
<summary>DELETE:/recipes/tags/delete/{id}</summary>

```TEXT
{
    status: 200,
    body: "Success!"
}
```

</details>
