SkillTreeCore.prototype.ReadTree=function(a,b){this.SkillList={},this.ActiveSkillList={},this.PassiveSkillList={},this.SkillCount=0,this.loadedSkillCount=0,$.ajax({cache:!1,url:"skilltreeinfo.json",dataType:"json",success:function(c){for(var d in c.CharacterName?$("#charName").text(c.CharacterName):$("#charName").text(GetCurrentFolderUrl()),c.CharacterWikiURL?c.CharacterName?$("#morecharacterinfo").attr("href",c.CharacterWikiURL).attr("target","_blank").text("More info about "+c.CharacterName):$("#morecharacterinfo").attr("href",c.CharacterWikiURL).attr("target","_blank").text("More info about "+GetCurrentFolderUrl()):$("#morecharacterinfo").remove(),window.document.title="Skill Simulator - "+c.CharacterName,c.Skills)c.Skills.hasOwnProperty(d)&&(window.SkillCore.SkillList[d]=new SkillInfo(d,c.Skills[d].Name,c.Skills[d]),(get=window.SkillCore.SkillList[d].IsPassive)?window.SkillCore.PassiveSkillList[d]=window.SkillCore.SkillList[d]:window.SkillCore.ActiveSkillList[d]=window.SkillCore.SkillList[d]);window.SkillCore.SkillCount=Object.keys(window.SkillCore.SkillList).length,"function"==typeof a&&a(c),window.SkillCore.RenderTree(b)}})},SkillTreeCore.prototype.GetSkill=function(a){return this.SkillList[a]},SkillTreeCore.prototype.GetSkillByShortID=function(a){for(var b in this.SkillList)if(this.SkillList.hasOwnProperty(b)&&this.SkillList[b].ShortID&&this.SkillList[b].ShortID==a)return this.SkillList[b];return null},SkillTreeCore.prototype.RenderTree=function(a){var b=$("li#activeskill");if(b){var c=$("<ul>").addClass("tableactiveskill");b.empty();var d=0;for(var e in this.ActiveSkillList)(get=this.ActiveSkillList[e].Visible)&&(1<this.ActiveSkillList[e].GetRowSpan()?d+=this.ActiveSkillList[e].GetRowSpan():d++,c.append($("<li>").addClass("tablelike").append(this.ActiveSkillList[e].GetSkillPanel())),3<=d&&(c&&b.append(c),c=$("<ul>").addClass("tableactiveskill"),d=0));0<d&&c&&b.append(c)}if(b=$("li#passiveskill"),b){var f=$("<ul>").addClass("tablepassiveskill");b.empty();var g=0;for(var e in this.PassiveSkillList)(get=this.PassiveSkillList[e].Visible)&&(1<this.PassiveSkillList[e].GetRowSpan()?g+=this.PassiveSkillList[e].GetRowSpan():g++,f.append($("<li>").addClass("tablelike").addClass("passiveskilltree").append(this.PassiveSkillList[e].GetSkillPanel())),2<=g&&(f&&b.append(f),f=$("<ul>").addClass("tablepassiveskill"),g=0));0<g&&f&&b.append(f)}"function"==typeof a&&$("#skilltree").imagesLoaded().always(function(){a()})},SkillInfo.prototype.GetSkillPanel=function(a){if(this.Panel)return this.Panel;if(a){var b=$("<div>").addClass("skillExinfopanel").addClass("fadeinAppear");b.attr("insight",this._id),b.css({top:""});var c=$("<img>").addClass("skillExIcon").attr("insight",this._id).attr("src",get=this.IconURL);b.append(c),SetToolTip(c);var d=$("<button type=\"button\" class=\"btn-success skillexup\" insight=\""+this._id+"\">").attr("skillup","1");this._currentskilllevel===this._skillmaxlevel&&d.addClass("disabled"),SetToolTipUp(d),b.append(d.click(function(){$(this).hasClass("disabled")||(window.SkillCore.GetSkill($(this).attr("insight")).SkillUp(),$(this).trigger("mouseover"))})),d=$("<button type=\"button\" class=\"btn-danger skillexdown\" insight=\""+this._id+"\">").attr("skilldown","1"),this._currentskilllevel===this._defaultLevel&&d.addClass("disabled"),SetToolTipDown(d),b.append(d.click(function(){$(this).hasClass("disabled")||(window.SkillCore.GetSkill($(this).attr("insight")).SkillDown(),$(this).trigger("mouseover"))})),b.append($("<p insight=\"skilllexevel\">").addClass("skillExLevel").text(this._currentskilllevel+""+this._skillmaxlevel));var e=get=this.Extensions;if(void 0!==e&&0<Object.keys(e).length){var f;for(var g in e)f=window.SkillCore.GetSkill(g),f.GetSkillPanel(!0).appendTo(b)}this.Panel=b}else{var b=$("<div>").addClass("skillinfopanel").addClass("fadeinAppear");b.attr("insight",this._id);var c=$("<img>").addClass("skillIcon").attr("insight",this._id).attr("src",get=this.IconURL);b.append(c),SetToolTip(c);var d=$("<button type=\"button\" class=\"btn btn-success skillup\" insight=\""+this._id+"\">").attr("skillup","1");this._currentskilllevel===this._skillmaxlevel&&d.addClass("disabled"),SetToolTipUp(d),b.append(d.click(function(){window.SkillCore.GetSkill($(this).attr("insight")).SkillUp(),$(this).trigger("mouseover")})),d=$("<button type=\"button\" class=\"btn btn-danger skilldown\" insight=\""+this._id+"\">").attr("skilldown","1"),this._currentskilllevel===this._defaultLevel&&d.addClass("disabled"),SetToolTipDown(d),b.append(d.click(function(){window.SkillCore.GetSkill($(this).attr("insight")).SkillDown(),$(this).trigger("mouseover")})),b.append($("<p insight=\"skilllevel\">").addClass("skillLevel").text(this._currentskilllevel+"/"+this._skillmaxlevel));var e=get=this.Extensions;if(void 0!==e&&0<Object.keys(e).length){var f,h=!1,i=0;for(var g in e){i++;var j=$("<div>").addClass("extension"+i+"infopanel");f=window.SkillCore.GetSkill(g),f.GetSkillPanel(!0).appendTo(j),this._currentskilllevel<this._skillmaxlevel?f.Disabled(!0):0<(get=f.CurrentSkillLevel)?(f.Disabled(!1),h=!0):f.Disabled(!0),j.appendTo(b)}if(!h&&this._currentskilllevel==this._skillmaxlevel)for(var g in e)window.SkillCore.GetSkill(g).Disabled(!1)}this.Panel=b}return this.Panel},SkillInfo.prototype.Disabled=function(a){if(a){this.UnlearnSkill();var b=this.GetSkillPanel();b.hasClass("disabled")||b.addClass("disabled"),b.find("button[skilldown]:not(.disabled)").addClass("disabled"),b.find("button[skillup]:not(.disabled)").addClass("disabled"),b.find("img:not(.disabled)").addClass("disabled")}else{var b=this.GetSkillPanel();b.hasClass("disabled")&&b.removeClass("disabled"),b.find("img.disabled").removeClass("disabled"),b.find("button.disabled[skilldown]").removeClass("disabled"),b.find("button.disabled[skillup]").removeClass("disabled")}},SkillInfo.prototype.UpdateSkill=function(){if(this.Panel){var a=this.Panel;if(a.children("p[insight=\"skilllevel\"]:first").text(this._currentskilllevel+"/"+this._skillmaxlevel),a.children("p[insight=\"skilllexevel\"]:first").text(this._currentskilllevel+""+this._skillmaxlevel),this._currentskilllevel<=this._defaultLevel){a.children("button[skilldown]:first").addClass("disabled");var b=this._parent;if(b&&!b.NextLevelInfo())for(var c in b.Extensions)b.Extensions[c].Disabled(!1)}else if(this._currentskilllevel==this._skillmaxlevel){a.children("button[skillup]:first").addClass("disabled");var b=this._parent;if(b){var d;for(var c in b.Extensions)d=b.Extensions[c],(get=d.ID)!==this._id&&d.Disabled(!0)}for(var c in this.Extensions)this.Extensions[c].Disabled(!1)}else{a.children("button.disabled[skilldown]:first").removeClass("disabled"),a.children("button.disabled[skillup]:first").removeClass("disabled");var b=this._parent;if(b){var d;for(var c in b.Extensions)d=b.Extensions[c],(get=d.ID)!==this._id&&d.Disabled(!0)}for(var c in this.Extensions)this.Extensions[c].Disabled(!0)}}},SkillInfo.prototype.SkillUp=function(){var a=this.NextLevelInfo();if(a){if((get=a.RequiredLevel)>(get=window.SkillCore.CurrentLevel))return void shownotify("Character level is not enough to learn further.","info");var b=get=a.RequiredSP;if((get=window.SkillCore.SPLeft)<b)return void shownotify("Insufficient skill point.","info");this._currentskilllevel++,this._spused+=b,window.SkillCore.InvestedSPIncrease(b),this.UpdateSkill()}},SkillInfo.prototype.SkillDown=function(){var a=this.PreviousLevelInfo();if(a){if(this._defaultLevel===this._currentskilllevel)return void shownotify("Can not go lower than skill's default level.","warning");var b=get=this.CurrentLevelInfo().RequiredSP;this._spused-=b,window.SkillCore.InvestedSPDecrease(b),this._currentskilllevel--,this.UpdateSkill()}},SkillInfo.prototype.SkillDownEx=function(){var a=this.PreviousLevelInfo();a&&(window.SkillCore.InvestedSPDecrease(get=this.CurrentLevelInfo().RequiredSP),this._currentskilllevel--,this.UpdateSkill())},SkillTreeCore.prototype.InvestedSPIncrease=function(a){this._investedsp+=a,this.UpdateSP()},SkillTreeCore.prototype.InvestedSPDecrease=function(a){this._investedsp-=a,this.UpdateSP()};