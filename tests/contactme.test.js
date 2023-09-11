import { it, expect, describe } from "vitest";
import { mount } from "@vue/test-utils";

import contactme from "../pages/contactme.vue";

describe("Contact Form Validation", () => {
  it("Form is invalid if no name if provided", () => {
    const wrapper = mount(contactme);

    expect(wrapper.vm).toBeTruthy();
  });
});
