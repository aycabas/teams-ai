// Copyright (c) Microsoft Corporation. All rights reserved.
// Licensed under the MIT License.

/*
All of these responses where generated by GPT using a prompt similar to:

```
Here's a JavaScript string literal template:

`I couldn't find a ${item} on your ${list} list.`

Create a JavaScript array with 7 variations of the template.
The variations should be helpful, creative, clever, and very friendly.
The variations should always use the back tick `` syntax.
The variations should always include ${item} and ${list} variables.
```

7 variations were asked for so that we can remove the 2 we like the least.
*/

/**
 * Generates a greeting message for the user.
 * @returns {string} The greeting message.
 */
export function greeting(): string {
    return getRandomResponse([
        'Welcome to List Bot! Type /reset to delete all existing lists.',
        "Hello! I'm List Bot. Use /reset to delete all your lists.",
        "Hi there! I'm here to help you manage your lists. Use /reset to delete all lists.",
        "Greetings! I'm List Bot. Type /reset to delete all your list.",
        'Hey there! List Bot here. You can use /reset to delete all lists.'
    ]);
}

/**
 * Resets all lists and returns a message indicating that the reset was successful.
 * @returns {string} The response message.
 */
export function reset(): string {
    return getRandomResponse([
        'Resetting all lists. All lists have been deleted.',
        'Starting fresh. All lists have been reset.',
        'All lists have been cleared. Ready for new lists!',
        'Cleaning slate. All lists have been reset.',
        'All lists have been wiped. Ready for new lists!'
    ]);
}

/**
 * Returns a random response message from an array of possible responses.
 * @param {string[]} responses An array of possible response messages.
 * @returns {string} A randomly selected response message.
 */
function getRandomResponse(responses: string[]): string {
    const i = Math.floor(Math.random() * (responses.length - 1));
    return responses[i];
}