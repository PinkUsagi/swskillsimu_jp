var c_maxlevel=60;class SkillTreeCore{constructor(){this._totalsp=0,this._currentlevel=0,this._investedsp=0,this._spleft=0}get TotalSP(){return this._totalsp}get CurrentLevel(){return this._currentlevel}get InvestedSP(){return this._investedsp}get SPLeft(){return this._spleft}GetCurrentLevel(){return this._currentlevel}SetLevelFromElement(){this.SetLevel(parseInt($("#selectLevelBox").val()))}SetLevel(a){this._currentlevel=Math.min(a,window.c_maxlevel),this._totalsp=this.inner_gettotalsp(this._currentlevel),this.UpdateAllSPs()}UpdateSP(){this._spleft=this._totalsp-this._investedsp,5>this._spleft?$("#e_remainingSP").addClass("alertlow"):$("#e_remainingSP").removeClass("alertlow"),$("#e_investedSP").text("Invested SP: "+this._investedsp+"/"+this._totalsp),$("#e_remainingSP").text("Remaining SP: "+this._spleft+"/"+this._totalsp),$("#spusageinfo").html(this.GenerateUsageInfo())}UpdateAllSPs(){$("#e_investedSP").text("Invested SP: "+this._investedsp+"/"+this._totalsp),this.CheckAllSkills()&&(this._spleft=this._totalsp-this._investedsp,$("#e_remainingSP").text("Remaining SP: "+this._spleft+"/"+this._totalsp),this.CheckAllSkills(),5>this._spleft?$("#e_remainingSP").addClass("alertlow"):$("#e_remainingSP").removeClass("alertlow")),$("#spusageinfo").html(this.GenerateUsageInfo())}UnlearnAllSkills(){for(var a in this.SkillList)this.SkillList[a].UnlearnSkill()}CheckAllSkills(){if(this._totalsp<this._investedsp){if(this.SkillList)for(var a in this.SkillList)this.SkillList[a].UnlearnSkill();return!1}if(!this.SkillList)return!1;var b,c;for(var a in this.SkillList)b=this.SkillList[a],b.GetAvailableLevel()>this._currentlevel?b.UnlearnSkill():((get=b.CurrentSkillLevel)<(get=b.GetDefaultLevel)&&b.UnlearnSkill(),c=b.CurrentLevelInfo(),(get=c.RequiredLevel)>this._currentlevel&&b.UnlearnSkill());return!0}inner_gettotalsp(a){for(var b=0,c=1;c<=a;c++)b+=this.inner_gettotalspex(c);return b}inner_gettotalspex(a){return 0===a?0:1===a?0:2===a?0:3===a?0:4===a?1:5===a?3:6===a?1:7===a?1:8===a?1:9===a?1:10===a?5:15===a?5:20===a?10:25===a?5:30===a?5:35===a?5:40===a?10:45===a?5:50===a?5:55===a?5:60===a?5:2}GenerateLink(a){var b=[];for(var c in this._currentlevel!==window.c_maxlevel&&b.push("lv="+this._currentlevel),this.SkillList){var d=get=this.SkillList[c].CurrentSkillLevel;d!=(get=this.SkillList[c].GetDefaultLevel)&&(a&&this.SkillList[c].ShortID?b.push(this.SkillList[c].ShortID+"="+d):b.push(c+"="+d))}var f=location.protocol+"//"+location.host+location.pathname,g="";return 0<b.length&&(g=b.join("&")),g&&(f=f+"?"+g),f}GenerateUsageInfo(){var a={},b,c;for(var d in this.SkillList)if(this.SkillList.hasOwnProperty(d)){var f=get=this.SkillList[d].CurrentSkillLevel;f!=(get=this.SkillList[d].GetDefaultLevel)&&(c=this.SkillList[d].GetSPUsed(),b=get=this.SkillList[d].Parent,0!=c&&(b?a[get=b.ID]+=" + "+c+"SP":a[d]=(get=this.SkillList[d].Name)+": "+c+"SP"))}var g="",h=!0;if(0<Object.keys(a).length)for(var d in a)a.hasOwnProperty(d)&&(h?(g+=a[d],h=!1):g+="<br>"+a[d]);return g}}var SkillCore=new SkillTreeCore,mouseX,mouseY;$(document).mousemove(function(a){window.mouseX=a.pageX,window.mouseY=a.pageY});function SetToolTip(a){return a.mouseover(function(){var b=$(this).attr("insight");if(b){var c=window.SkillCore.GetSkill(b),d=c.CurrentLevelInfo();if(d){var f=get=d.SkillDescription,g=get=d.SkillEffect,h=$("div#tooltip");if(!f&&!g)return void h.stop(!1,!0).fadeOut("fast");f?$("div#tooltip pre:first").text((get=c.Name)+"\n[Description]\n"+f):$("div#tooltip pre:first").empty(),g?$("div#tooltip pre:last").text("[Effect]\n"+g):$("div#tooltip pre:last").empty();var j={},k=window.mouseY+10;k+h.outerHeight(!0)>$(document).height()?(j.bottom=0,j.top=""):(j.bottom="",j.top=k),k=window.mouseX+5,k+h.outerWidth(!0)>$(document).width()?(j.left="",j.right=0):(j.right="",j.left=k),h.css(j),h.stop(!1,!0).fadeIn("fast")}}}).mousemove(function(){var b=$("div#tooltip"),c={},d=window.mouseY+10;d+b.outerHeight(!0)>$(document).height()?(c.bottom=0,c.top=""):(c.bottom="",c.top=d),d=window.mouseX+5,d+b.outerWidth(!0)>$(document).width()?(c.left="",c.right=0):(c.right="",c.left=d),b.css(c)}).mouseout(function(){$("div#tooltip").stop(!1,!0).fadeOut("fast")}),a}function SetToolTipUp(a){return a.mouseover(function(){var b=$(this).attr("insight");if(b){var c=window.SkillCore.GetSkill(b),d=c.CurrentLevelInfo(),f=c.NextLevelInfo(),g=$("div#tooltip");if(d||f){var h=get=d.SkillEffect,j="";if(f&&(j=get=f.SkillEffect),!h&&!j)return void g.stop(!1,!0).fadeOut("fast");h?$("div#tooltip pre:first").text("[Current]\n"+h):$("div#tooltip pre:first").empty(),j?$("div#tooltip pre:last").text("[After]\n"+j):$("div#tooltip pre:last").empty();var k={},l=window.mouseY+10;l+g.outerHeight(!0)>$(document).height()?(k.bottom=0,k.top=""):(k.bottom="",k.top=l),l=window.mouseX+5,l+g.outerWidth(!0)>$(document).width()?(k.left="",k.right=0):(k.right="",k.left=l),g.css(k),g.stop(!1,!0).fadeIn("fast")}}}).mousemove(function(){var b=$("div#tooltip"),c={},d=window.mouseY+10;d+b.outerHeight(!0)>$(document).height()?(c.bottom=0,c.top=""):(c.bottom="",c.top=d),d=window.mouseX+5,d+b.outerWidth(!0)>$(document).width()?(c.left="",c.right=0):(c.right="",c.left=d),b.css(c)}).mouseout(function(){$("div#tooltip").stop(!1,!0).fadeOut("fast")}),a}function SetToolTipDown(a){return a.mouseover(function(){var b=$(this).attr("insight");if(b){var c=window.SkillCore.GetSkill(b),d=c.CurrentLevelInfo(),f=c.PreviousLevelInfo(),g=$("div#tooltip");if(d||f){var h=get=d.SkillEffect,j="";if(f&&(j=get=f.SkillEffect),!h&&!j)return void g.stop(!1,!0).fadeOut("fast");h?$("div#tooltip pre:first").text("[Current]\n"+h):$("div#tooltip pre:first").empty(),j?$("div#tooltip pre:last").text("[After]\n"+j):$("div#tooltip pre:last").text("[After]\nNone.");var k={},l=window.mouseY+10;l+g.outerHeight(!0)>$(document).height()?(k.bottom=0,k.top=""):(k.bottom="",k.top=l),l=window.mouseX+5,l+g.outerWidth(!0)>$(document).width()?(k.left="",k.right=0):(k.right="",k.left=l),g.css(k),g.stop(!1,!0).fadeIn("fast")}}}).mousemove(function(){var b=$("div#tooltip"),c={},d=window.mouseY+10;d+b.outerHeight(!0)>$(document).height()?(c.bottom=0,c.top=""):(c.bottom="",c.top=d),d=window.mouseX+5,d+b.outerWidth(!0)>$(document).width()?(c.left="",c.right=0):(c.right="",c.left=d),b.css(c)}).mouseout(function(){$("div#tooltip").stop(!1,!0).fadeOut("fast")}),a}function ShowDangerDialog(a,b,c){BootstrapDialog.show({label:BootstrapDialog.TYPE_WARNING,title:"Warning",message:a,cssClass:"bootstrap3-dialog",buttons:[{label:"Yes",cssClass:"btn btn-warning",action:function(d){d.close(),"function"==typeof b&&b()}},{label:"No",cssClass:"btn btn-primary",action:function(d){d.close(),"function"==typeof c&&c()}}]})}function ShowMessageDialog(a,b){BootstrapDialog.show({title:"Notice",message:a,cssClass:"bootstrap3-dialog",buttons:[{label:"OK",cssClass:"btn btn-primary",action:function(c){c.close(),"function"==typeof b&&b()}}]})}function ShowConfirmDialog(a,b,c){BootstrapDialog.show({title:"Double confirm",message:a,cssClass:"bootstrap3-dialog",buttons:[{label:"Yes",cssClass:"btn btn-primary",action:function(d){d.close(),"function"==typeof b&&b()}},{label:"No",cssClass:"btn btn-default",action:function(d){d.close(),"function"==typeof c&&c()}}]})}$(function(){SetLoading($("body"));for(var a=$("<select id=\"selectLevelBox\">").addClass("bootstrap3-dialog").change(function(){window.SkillCore.SetLevel($(this).val())}),b=1;b<=window.c_maxlevel;b++)a.append($("<option>").val(b).text(b));$("#levelBoxtd").append(a);var c=GetUrlParam("lv",60);60==c&&(c=GetUrlParam("level",60)),isNaN(c)&&(c=60),a.val(c),a.trigger("change"),$("#charList li a[href]"),$("a[href^=\"../"+GetCurrentFolderUrl()+"\"]").parent().closest("li").remove(),$("#copyURL").click(function(){var d=window.SkillCore.GenerateLink(!0);d&&copyLink(d)}),$("#resetAllSkill").click(function(){ShowDangerDialog("Are you sure you want to unlearn all skills?",function(){window.SkillCore.UnlearnAllSkills()})}),window.SkillCore.ReadTree(function(){RemoveLoading($("body"))})});