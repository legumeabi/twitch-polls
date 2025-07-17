# Twitch Polling Tool

A Twitch polling tool bot and poll visualization overlay for custom polls.

## Integration into OBS

This guide describes OBS, but it should work almost identical in other streaming software.

The polling tool consists of a single HTML file that contains all the code and can be integrated into OBS as a browser
source.

1. Download the latest version under the Release section of this GitHub repository (for example `twitch-polls-3.0.0.html`).
2. Open the HTML file in your editor of choice and edit at least the channel name field to be your channel of choice.
3. Create new browser source in OBS.
4. In the browser source properties check `Local file` and then select the downloaded twitch-polls.html file.
5. Set Width to 1920 and Height to 1080.

## Options

### Starting Position

If you don't want the poll to be in the default position (top left) you can change the `POSITION_CODE` variable
at the top of the HTML file.

These are the supported options:

- `tl`: top left (default)
- `tr`: top right
- `br`: bottom right
- `bl`: bottom left

### Icons

You can edit the `USE_ICONS` to be `false` if you prefer not have icons shown for winners and tie-break winners.

### Themeability

You can customize some aspects of the poll design by altering the CSS values in the in the top `<style>` section of the
HTML file.

## Usage

The chat commands to start and edit polls are only available to the broadcaster.

### How Votes Work

When a poll is active any number that is put into chat counts as a vote by that user. Following rules apply:

- A number is only counted when it is a valid option number
- A number is only counted when the message starts with that number (optionally followed by a space and arbitrary other text).
- A user can change their vote to another number by inputting another valid number
- With inputting 0 the user can withdraw their vote

### Starting a Poll

There are different ways to start a poll:

`!poll`: starts a poll with just two options named 1 and 2.

<img width="1920" alt="Bildschirmfoto 2022-07-30 um 22 08 15" src="https://user-images.githubusercontent.com/94025590/181994769-7bb71d57-cb0a-4d26-91c1-7828597e3489.png">

`!poll 3`: starts a poll with three options named 1, 2, 3. (Up to 9 options are supported).

<img width="1920" alt="Bildschirmfoto 2022-07-30 um 22 08 42" src="https://user-images.githubusercontent.com/94025590/181994778-fa08a89b-84e2-494e-a918-37866663bbc5.png">

`!poll "what kind of person are you?" "cat person?" "dog person?" "why not both?"`: starts a poll with a title (the first text) and three named options and a title (everything after the first text). These option names will appear next to the option numbers.

<img width="1920" alt="Bildschirmfoto 2022-07-30 um 22 09 59" src="https://user-images.githubusercontent.com/94025590/181994811-878d4d6b-5c9d-487e-b34f-63c2d6cff14c.png">

`!poll "" "cat person?" "dog person?" "why not both?"`: leaves out the title (which will default to "Poll") and supplies the same three options:

<img width="1920" alt="Bildschirmfoto 2022-07-30 um 22 10 20" src="https://user-images.githubusercontent.com/94025590/181994877-82a22432-5799-4ffd-9995-d29a1fed0f82.png">

### Changing the Poll Title

`!polltitle "New Poll Title"`

This will change the poll title of the currently active poll to "New Poll Title".

### Stopping a Poll

`!pollstop`

This will stop the currently active poll in its current state and highlights the winning option. If several options are tied they will be highlighted together.

<img width="1920" alt="Bildschirmfoto 2022-07-30 um 22 10 43" src="https://user-images.githubusercontent.com/94025590/181994884-358fb293-2daa-4406-93f9-efd0bb93ab3a.png">
<img width="1920" alt="Bildschirmfoto 2022-07-30 um 22 11 21" src="https://user-images.githubusercontent.com/94025590/181994887-30a27146-d739-4b77-8be2-e4b52dc968ee.png">

### Resuming a Poll

`!pollresume`

This will resume the currently stopped, but still visible poll.

### Breaking a Tied Poll

`!polltiebreak`

This will pick a random winner out of the tied options in the poll.

### Resetting the Votes

`!pollreset`

This will leave the currently running poll active and visible while resetting all the votes.

### Ending a Poll

`!pollend`

This completely ends the poll and throws away the results. You can't recover the results after.

## Creating a New Release

This is a step-by-step of our own release process.

1. Create and push new commit with the following things:

- Make sure the changelog is up-to-date: Everything that was "unreleased" previously should now live under a new version header under appropriate sub headers (features, bug fixes, internal changes).
- Make sure the same version number is updated in the package.json and also run `npm install` once so that it is reflected into the package-lock.json.

2. Trigger the GitHub workflow "Release a new version":

- Pick the `main` branch with the latest commit
- Enter the previously chosen version number and hit "Run workflow"
- This creates a draft release with that version number

3. Edit and Publish Draft Release

- Paste the changelog for the specific version into the draft release
- Verify that the HTML file is downloadable in the assets section
- Publish the release

## Attributions

Icons provided by https://github.com/tabler/tabler-icons (under MIT license, Copyright (c) 2020-2023 Paweł Kuna).
