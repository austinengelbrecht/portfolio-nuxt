import { it, expect, describe, afterAll, beforeAll } from "vitest";
import { mount, shallowMount } from "@vue/test-utils";

import contactme from "../pages/contactme.vue";

let wrapper;

beforeAll(() => {
  wrapper = shallowMount(contactme);
});

describe("ContactMe.vue", () => {
  it("ContactMe.vue should mount to page", () => {
    // let wrapper = mount(contactme);

    const mounted = wrapper.vm;
    expect(mounted).toBeTruthy();
  });
});
