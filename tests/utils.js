
/**
 * Assert that the component template element with the given selector
 * contains the given text. The component must be mounted, thus the
 * wrapper parameter.
 *
 * @param text
 * @param selector
 * @param wrapper
 */
export function assertContain(text, selector, wrapper) {
    const wrap = selector ? wrapper.find(selector) : wrapper;

    expect(wrap.html()).toContain(text);
}

/** Assert that the component template element with the given selector
 * does not contain the given test. The component must be mounted, thus the
 * wrapper parameter.
 *
 * @param text
 * @param selector
 * @param wrapper
 */
export function assertNotContain(text, selector, wrapper) {
    const wrap = selector ? wrapper.find(selector) : wrapper;

    expect(wrap.html()).not.toContain(text);
}

/**
 * Assert that the element found by the given selector is visible.
 *
 * @param selector
 * @param wrapper
 */
export function assertVisible(selector, wrapper) {
    expect(getComputedStyle(wrapper.find(selector).element).display).not.toBe('none');
}

/**
 * Assert that the element found by the given selector is not displayed.
 *
 * @param selector
 * @param wrapper
 */
export function assertNotVisible(selector, wrapper) {
    expect(getComputedStyle(wrapper.find(selector).element).display).toBe('none');
}

/**
 * Click on the element found by the given selector and
 * return a promise in order to wait for the trigger.
 *
 * @param selector
 * @param wrapper
 * @return Promise
 */
export function click(selector, wrapper) {
    const element = wrapper.find(selector);

    return element.trigger('click');
}

/**
 * Click on the button that has the 'submit' type and
 * return a promise in order to wait for the trigger.
 *
 * @param {wrapper} wrapper
 * @return Promise
 */
export function submit(wrapper) {
    const element = wrapper.find('button[type="submit"]');

    return element.trigger('click');
}

/**
 * Set the given value to the input element found by the
 * given selector and triggers the 'change' event and
 * return a promise in order to wait for the trigger.
 *
 * @param selector
 * @param value
 * @param wrapper
 * @return Promise
 */
export function input(selector, value, wrapper) {
    const input = wrapper.find(selector);
    input.element.value = value;

    return input.trigger('input');
}

/**
 * Set the given option value to the select element found
 * by the given selector and triggers the 'change' event
 * and return a promise in order to wait for the trigger.
 *
 * @param selector
 * @param optionValue
 * @param wrapper
 * @return Promise
 */
export function select(selector, optionValue, wrapper) {
    const select = wrapper.find(selector);
    const option = select.find(`option[value="${optionValue}"]`);
    
    option.element.selected = true;
    
    return select.trigger('change');
}

/**
 * Set the given checked value to the checkbox element found
 * by the given selector and triggers the 'change' event and
 * return a promise in order to wait for the trigger.
 *
 * @param selector
 * @param value
 * @param wrapper
 * @return Promise
 */
export function check(selector, checked, wrapper) {
    const input = wrapper.find(selector);
    input.element.checked = checked;
    
    return input.trigger('change');
}

/**
 * Set the given input value found in the given selector to true
 * and triggers the 'change' event and return a promise in order
 * to wait for the trigger.
 *
 * @param selector
 * @param inputValue
 * @param wrapper
 */
export function tick(selector, inputValue, wrapper) {
    const group = wrapper.find(selector);
    const input = group.find(`input[value="${inputValue}"]`);
    
    input.element.checked = true;
    
    return input.trigger('change');
}
