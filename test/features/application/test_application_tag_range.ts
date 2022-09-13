import TSON from "../../../src";
import { TagRange } from "../../structures/TagRange";
import { _test_application } from "./_test_application";

export const test_application_tag_range = _test_application(
    "range tag",
    TSON.application<[TagRange]>(),
    {
        schemas: [
            {
                $ref: "#/components/schemas/TagRange",
            },
        ],
        components: {
            schemas: {
                TagRange: {
                    type: "object",
                    properties: {
                        minimum: {
                            type: "number",
                            nullable: false,
                            metaTags: [
                                {
                                    kind: "minimum",
                                    value: 3,
                                },
                            ],
                            jsDocTags: [
                                {
                                    name: "minimum",
                                    text: [
                                        {
                                            text: "3",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            minimum: 3,
                        },
                        maximum: {
                            type: "number",
                            nullable: false,
                            metaTags: [
                                {
                                    kind: "maximum",
                                    value: 7,
                                },
                            ],
                            jsDocTags: [
                                {
                                    name: "maximum",
                                    text: [
                                        {
                                            text: "7",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            maximum: 7,
                        },
                        minimum_and_maximum: {
                            type: "number",
                            nullable: false,
                            metaTags: [
                                {
                                    kind: "minimum",
                                    value: 3,
                                },
                                {
                                    kind: "maximum",
                                    value: 7,
                                },
                            ],
                            jsDocTags: [
                                {
                                    name: "minimum",
                                    text: [
                                        {
                                            text: "3",
                                            kind: "text",
                                        },
                                    ],
                                },
                                {
                                    name: "maximum",
                                    text: [
                                        {
                                            text: "7",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            minimum: 3,
                            maximum: 7,
                        },
                        greater: {
                            type: "number",
                            nullable: false,
                            metaTags: [
                                {
                                    kind: "range",
                                    minimum: {
                                        include: false,
                                        value: 3,
                                    },
                                },
                            ],
                            jsDocTags: [
                                {
                                    name: "range",
                                    text: [
                                        {
                                            text: "(3",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            exclusiveMinimum: 3,
                        },
                        greater_equal: {
                            type: "number",
                            nullable: false,
                            metaTags: [
                                {
                                    kind: "range",
                                    minimum: {
                                        include: true,
                                        value: 3,
                                    },
                                },
                            ],
                            jsDocTags: [
                                {
                                    name: "range",
                                    text: [
                                        {
                                            text: "[3",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            minimum: 3,
                        },
                        less: {
                            type: "number",
                            nullable: false,
                            metaTags: [
                                {
                                    kind: "range",
                                    maximum: {
                                        include: false,
                                        value: 7,
                                    },
                                },
                            ],
                            jsDocTags: [
                                {
                                    name: "range",
                                    text: [
                                        {
                                            text: "7)",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            exclusiveMaximum: 7,
                        },
                        less_equal: {
                            type: "number",
                            nullable: false,
                            metaTags: [
                                {
                                    kind: "range",
                                    maximum: {
                                        include: true,
                                        value: 7,
                                    },
                                },
                            ],
                            jsDocTags: [
                                {
                                    name: "range",
                                    text: [
                                        {
                                            text: "7]",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            maximum: 7,
                        },
                        greater_less: {
                            type: "number",
                            nullable: false,
                            metaTags: [
                                {
                                    kind: "range",
                                    minimum: {
                                        include: false,
                                        value: 3,
                                    },
                                    maximum: {
                                        include: false,
                                        value: 7,
                                    },
                                },
                            ],
                            jsDocTags: [
                                {
                                    name: "range",
                                    text: [
                                        {
                                            text: "(3, 7)",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            exclusiveMinimum: 3,
                            exclusiveMaximum: 7,
                        },
                        greater_equal_less: {
                            type: "number",
                            nullable: false,
                            metaTags: [
                                {
                                    kind: "range",
                                    minimum: {
                                        include: true,
                                        value: 3,
                                    },
                                    maximum: {
                                        include: false,
                                        value: 7,
                                    },
                                },
                            ],
                            jsDocTags: [
                                {
                                    name: "range",
                                    text: [
                                        {
                                            text: "[3, 7)",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            minimum: 3,
                            exclusiveMaximum: 7,
                        },
                        greater_less_equal: {
                            type: "number",
                            nullable: false,
                            metaTags: [
                                {
                                    kind: "range",
                                    minimum: {
                                        include: false,
                                        value: 3,
                                    },
                                    maximum: {
                                        include: true,
                                        value: 7,
                                    },
                                },
                            ],
                            jsDocTags: [
                                {
                                    name: "range",
                                    text: [
                                        {
                                            text: "(3, 7]",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            exclusiveMinimum: 3,
                            maximum: 7,
                        },
                        greater_equal_less_equal: {
                            type: "number",
                            nullable: false,
                            metaTags: [
                                {
                                    kind: "range",
                                    minimum: {
                                        include: true,
                                        value: 3,
                                    },
                                    maximum: {
                                        include: true,
                                        value: 7,
                                    },
                                },
                            ],
                            jsDocTags: [
                                {
                                    name: "range",
                                    text: [
                                        {
                                            text: "[3, 7]",
                                            kind: "text",
                                        },
                                    ],
                                },
                            ],
                            minimum: 3,
                            maximum: 7,
                        },
                    },
                    nullable: false,
                    required: [
                        "minimum",
                        "maximum",
                        "minimum_and_maximum",
                        "greater",
                        "greater_equal",
                        "less",
                        "less_equal",
                        "greater_less",
                        "greater_equal_less",
                        "greater_less_equal",
                        "greater_equal_less_equal",
                    ],
                    jsDocTags: [],
                },
            },
        },
        purpose: "swagger",
        prefix: "#/components/schemas",
    },
);