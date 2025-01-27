import TSON from "../../../src";
import { TagPattern } from "../../structures/TagPattern";
import { _test_validate_equals } from "./../validate_equals/_test_validate_equals";

export const test_create_validate_equals_tag_pattern = _test_validate_equals(
    "pattern tag",
    TagPattern.generate,
    TSON.createValidateEquals<TagPattern>(),
);
