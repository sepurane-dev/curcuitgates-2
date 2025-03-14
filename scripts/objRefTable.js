const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Plugins.Touch,
		C3.Plugins.Browser,
		C3.Plugins.Text,
		C3.Behaviors.NoSave,
		C3.Plugins.Arr,
		C3.Plugins.LocalStorage,
		C3.Plugins.Keyboard,
		C3.Plugins.AJAX,
		C3.Behaviors.Tween,
		C3.Plugins.Audio,
		C3.Behaviors.Pin,
		C3.Plugins.System.Cnds.OnLayoutStart,
		C3.Plugins.System.Acts.SetVar,
		C3.Plugins.Arr.Exps.At,
		C3.Plugins.System.Exps.int,
		C3.Plugins.System.Exps.layoutname,
		C3.Plugins.Text.Acts.SetText,
		C3.Plugins.Text.Exps.Text,
		C3.Plugins.Sprite.Acts.SetOpacity,
		C3.Plugins.System.Acts.SetLayerVisible,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Text.Cnds.CompareText,
		C3.Plugins.Sprite.Cnds.CompareInstanceVar,
		C3.Behaviors.Pin.Acts.PinByImagePoint,
		C3.Plugins.System.Cnds.Compare,
		C3.Plugins.System.Cnds.Else,
		C3.Plugins.System.Cnds.CompareBoolVar,
		C3.Plugins.System.Acts.SetBoolVar,
		C3.Plugins.Sprite.Cnds.IsOnLayer,
		C3.Behaviors.Tween.Acts.TweenOneProperty,
		C3.Plugins.System.Cnds.CompareVar,
		C3.Plugins.Touch.Cnds.OnTouchStart,
		C3.Plugins.Touch.Cnds.IsTouchingObject,
		C3.Plugins.Sprite.Acts.SetAnimFrame,
		C3.Plugins.Sprite.Acts.SetAnim,
		C3.Plugins.Touch.Cnds.OnTouchEnd,
		C3.Plugins.Sprite.Cnds.CompareFrame,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.GoToLayout,
		C3.Plugins.Sprite.Cnds.IsAnimPlaying,
		C3.Plugins.Sprite.Acts.SetInstanceVar,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Touch.Cnds.OnTapGestureObject,
		C3.Behaviors.Tween.Cnds.IsAnyPlaying,
		C3.Plugins.Sprite.Exps.UID,
		C3.Plugins.Sprite.Exps.ImagePointY,
		C3.Plugins.System.Acts.WaitForPreviousActions,
		C3.Plugins.System.Cnds.TriggerOnce,
		C3.Plugins.System.Acts.NextPrevLayout,
		C3.Plugins.System.Cnds.ForEach,
		C3.Plugins.Sprite.Acts.Spawn,
		C3.Plugins.Sprite.Exps.LayerName,
		C3.Plugins.Sprite.Exps.ImagePointCount,
		C3.Plugins.System.Exps.loopindex,
		C3.Plugins.Sprite.Exps.Count,
		C3.Plugins.System.Exps.dt,
		C3.Plugins.Sprite.Exps.AnimationFrame,
		C3.Plugins.Sprite.Cnds.IsOverlapping,
		C3.Plugins.Sprite.Cnds.PickByUID,
		C3.Plugins.Sprite.Exps.PickedCount,
		C3.Plugins.Sprite.Acts.AddInstanceVar,
		C3.Plugins.System.Cnds.PickOverlappingPoint,
		C3.Plugins.Sprite.Exps.ImagePointX,
		C3.Plugins.System.Cnds.ForEachOrdered,
		C3.Plugins.Sprite.Exps.Y,
		C3.Plugins.Browser.Acts.ConsoleLog,
		C3.Plugins.Sprite.Acts.SetDefaultColor,
		C3.Plugins.System.Exps.rgbex255,
		C3.Plugins.System.Cnds.PickByComparison,
		C3.Plugins.System.Exps.tokenat,
		C3.Plugins.System.Cnds.For,
		C3.Plugins.Arr.Acts.SetX,
		C3.Plugins.LocalStorage.Acts.SetItem,
		C3.Plugins.Arr.Exps.AsJSON,
		C3.Plugins.Text.Cnds.CompareInstanceVar,
		C3.Plugins.System.Cnds.LayerVisible,
		C3.Plugins.Arr.Exps.Width,
		C3.Plugins.AJAX.Acts.RequestFile,
		C3.Plugins.LocalStorage.Acts.CheckItemExists,
		C3.Plugins.AJAX.Cnds.OnComplete,
		C3.Plugins.Arr.Acts.JSONLoad,
		C3.Plugins.AJAX.Exps.LastData,
		C3.Plugins.LocalStorage.Cnds.OnItemMissing,
		C3.Plugins.Arr.Acts.SetSize,
		C3.Plugins.LocalStorage.Cnds.OnItemExists,
		C3.Plugins.LocalStorage.Acts.GetItem,
		C3.Plugins.LocalStorage.Cnds.OnItemGet,
		C3.Plugins.LocalStorage.Exps.ItemValue,
		C3.Plugins.Arr.Cnds.CompareX,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.Sprite.Acts.SetVisible,
		C3.Plugins.System.Acts.GoToLayoutByName,
		C3.Plugins.Audio.Acts.PlayByName,
		C3.Plugins.Text.Acts.SetOpacity,
		C3.Behaviors.Tween.Acts.TweenTwoProperties,
		C3.Behaviors.Tween.Cnds.OnTweensFinished
	];
};
self.C3_JsPropNameTable = [
	{Value: 0},
	{Input: 0},
	{Touch: 0},
	{Symbol: 0},
	{InputSources: 0},
	{InputValue1: 0},
	{InputValue2: 0},
	{Gate: 0},
	{InputCount: 0},
	{InputWireUIDs: 0},
	{InputWireUID: 0},
	{Output: 0},
	{InputSource: 0},
	{InputSourceUID: 0},
	{SwitchSide: 0},
	{Wire: 0},
	{Browser: 0},
	{WireUID: 0},
	{WireInput: 0},
	{WireOutput: 0},
	{InputValue: 0},
	{OutputL: 0},
	{OutputR: 0},
	{HandleSide: 0},
	{Switch: 0},
	{BG: 0},
	{PlayButton: 0},
	{ID: 0},
	{UIText: 0},
	{NoSave: 0},
	{SoundButton: 0},
	{ResetButton: 0},
	{ArrayLevelProgress: 0},
	{LocalStorage: 0},
	{Keyboard: 0},
	{HomeButton: 0},
	{LevelButton: 0},
	{LevelButtonStar: 0},
	{HUDPanel: 0},
	{ArrayLevelMoves: 0},
	{AJAX: 0},
	{Tween: 0},
	{Mask: 0},
	{CompletePopStar: 0},
	{CompleteButton: 0},
	{LevelButtonLock: 0},
	{GateInfoPanel: 0},
	{GateInfoCloseButton: 0},
	{Audio: 0},
	{Title: 0},
	{SwitchGateUID: 0},
	{SwitchHandle: 0},
	{TutorialWire: 0},
	{Step: 0},
	{TutorialClip: 0},
	{Inputs: 0},
	{Gates: 0},
	{Wires: 0},
	{WireIO: 0},
	{Switches: 0},
	{Pin: 0},
	{UITexts: 0},
	{LevelButtons: 0},
	{LevelButtonStars: 0},
	{SwitchHandles: 0},
	{MaxMoves: 0},
	{Moves: 0},
	{State: 0},
	{WirePicked: 0},
	{GateUID: 0},
	{SwitchUID: 0},
	{InputActive: 0},
	{SFX: 0},
	{SFXName: 0},
	{Tutorial: 0}
];

self.InstanceType = {
	Input: class extends self.ISpriteInstance {},
	Touch: class extends self.IInstance {},
	Gate: class extends self.ISpriteInstance {},
	Output: class extends self.ISpriteInstance {},
	Wire: class extends self.ISpriteInstance {},
	Browser: class extends self.IInstance {},
	WireInput: class extends self.ISpriteInstance {},
	WireOutput: class extends self.ISpriteInstance {},
	Switch: class extends self.ISpriteInstance {},
	BG: class extends self.ISpriteInstance {},
	PlayButton: class extends self.ISpriteInstance {},
	UIText: class extends self.ITextInstance {},
	SoundButton: class extends self.ISpriteInstance {},
	ResetButton: class extends self.ISpriteInstance {},
	ArrayLevelProgress: class extends self.IArrayInstance {},
	LocalStorage: class extends self.IInstance {},
	Keyboard: class extends self.IInstance {},
	HomeButton: class extends self.ISpriteInstance {},
	LevelButton: class extends self.ISpriteInstance {},
	LevelButtonStar: class extends self.ISpriteInstance {},
	HUDPanel: class extends self.ISpriteInstance {},
	ArrayLevelMoves: class extends self.IArrayInstance {},
	AJAX: class extends self.IInstance {},
	Mask: class extends self.ISpriteInstance {},
	CompletePopStar: class extends self.ISpriteInstance {},
	CompleteButton: class extends self.ISpriteInstance {},
	LevelButtonLock: class extends self.ISpriteInstance {},
	GateInfoPanel: class extends self.ISpriteInstance {},
	GateInfoCloseButton: class extends self.ISpriteInstance {},
	Audio: class extends self.IInstance {},
	Title: class extends self.ISpriteInstance {},
	SwitchHandle: class extends self.ISpriteInstance {},
	TutorialWire: class extends self.ISpriteInstance {},
	TutorialClip: class extends self.ISpriteInstance {},
	Inputs: class extends self.ISpriteInstance {},
	Gates: class extends self.ISpriteInstance {},
	Wires: class extends self.ISpriteInstance {},
	WireIO: class extends self.ISpriteInstance {},
	Switches: class extends self.ISpriteInstance {},
	UITexts: class extends self.ITextInstance {},
	LevelButtons: class extends self.ISpriteInstance {},
	LevelButtonStars: class extends self.ISpriteInstance {},
	SwitchHandles: class extends self.ISpriteInstance {}
}