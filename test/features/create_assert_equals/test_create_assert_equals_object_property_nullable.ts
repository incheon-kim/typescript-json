import TSON from "../../../src";
import { ObjectPropertyNullable } from "../../structures/ObjectPropertyNullable";
import { _test_assert_equals } from "./../assert_equals/_test_assert_equals";

export const test_create_assert_equals_object_property_nullable =
    _test_assert_equals(
        "nullable object property",
        ObjectPropertyNullable.generate,
        TSON.createAssertEquals<ObjectPropertyNullable>(),
    );
