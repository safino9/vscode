/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the MIT License. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/

import { localize } from 'vs/nls';
import { editorErrorForeground, editorForeground, editorHintForeground, editorInfoForeground, editorWarningForeground, registerColor } from 'vs/platform/theme/common/colorRegistry';
import { TestMessageSeverity, TestRunState } from 'vs/workbench/api/common/extHostTypes';

export const testingColorIconFailed = registerColor('testing.iconFailed', {
	dark: '#f14c4c',
	light: '#f14c4c',
	hc: '#000000'
}, localize('testing.iconFailed', "Color for the 'failed' icon in the test explorer."));

export const testingColorIconErrored = registerColor('testing.iconErrored', {
	dark: '#f14c4c',
	light: '#f14c4c',
	hc: '#000000'
}, localize('testing.iconErrored', "Color for the 'Errored' icon in the test explorer."));

export const testingColorIconPassed = registerColor('testing.iconPassed', {
	dark: '#73c991',
	light: '#73c991',
	hc: '#000000'
}, localize('testing.iconPassed', "Color for the 'passed' icon in the test explorer."));

export const testingColorRunAction = registerColor('testing.runAction', {
	dark: testingColorIconPassed,
	light: testingColorIconPassed,
	hc: testingColorIconPassed
}, localize('testing.runAction', "Color for 'run' icons in the editor."));

export const testingColorIconQueued = registerColor('testing.iconQueued', {
	dark: '#cca700',
	light: '#cca700',
	hc: '#000000'
}, localize('testing.iconQueued', "Color for the 'Queued' icon in the test explorer."));

export const testingColorIconUnset = registerColor('testing.iconUnset', {
	dark: '#848484',
	light: '#848484',
	hc: '#848484'
}, localize('testing.iconUnset', "Color for the 'Unset' icon in the test explorer."));

export const testingColorIconSkipped = registerColor('testing.iconSkipped', {
	dark: '#848484',
	light: '#848484',
	hc: '#848484'
}, localize('testing.iconSkipped', "Color for the 'Skipped' icon in the test explorer."));

export const testingPeekBorder = registerColor('testing.peekBorder', {
	dark: editorErrorForeground,
	light: editorErrorForeground,
	hc: editorErrorForeground,
}, localize('testing.peekBorder', 'Color of the peek view borders and arrow.'));

export const testMessageSeverityColors: {
	[K in TestMessageSeverity]: {
		decorationForeground: string,
	};
} = {
	[TestMessageSeverity.Error]: {
		decorationForeground: registerColor(
			'testing.message.error.decorationForeground',
			{ dark: editorErrorForeground, light: editorErrorForeground, hc: editorForeground },
			localize('testing.message.error.decorationForeground', 'Text color of test error messages shown inline in the editor.')
		),
	},
	[TestMessageSeverity.Warning]: {
		decorationForeground: registerColor(
			'testing.message.warning.decorationForeground',
			{ dark: editorWarningForeground, light: editorWarningForeground, hc: editorForeground },
			localize('testing.message.warning.decorationForeground', 'Text color of test warning messages shown inline in the editor.')
		),
	},
	[TestMessageSeverity.Information]: {
		decorationForeground: registerColor(
			'testing.message.info.decorationForeground',
			{ dark: editorInfoForeground, light: editorInfoForeground, hc: editorForeground },
			localize('testing.message.info.decorationForeground', 'Text color of test info messages shown inline in the editor.')
		),
	},
	[TestMessageSeverity.Hint]: {
		decorationForeground: registerColor(
			'testing.message.hint.decorationForeground',
			{ dark: editorHintForeground, light: editorHintForeground, hc: editorForeground },
			localize('testing.message.hint.decorationForeground', 'Text color of test hint messages shown inline in the editor.')
		),
	},
};

export const testStatesToIconColors: { [K in TestRunState]?: string } = {
	[TestRunState.Errored]: testingColorIconErrored,
	[TestRunState.Failed]: testingColorIconFailed,
	[TestRunState.Passed]: testingColorIconPassed,
	[TestRunState.Queued]: testingColorIconQueued,
	[TestRunState.Unset]: testingColorIconUnset,
	[TestRunState.Skipped]: testingColorIconUnset,
};
