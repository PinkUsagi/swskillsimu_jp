function ShowSkillSelection(a,b){if(window.SkillCore){var d=[{label:'Select',cssClass:'btn btn-success',action:function(f){f.close(),'function'==typeof b&&b(f.getData('selectedskillid'))}}];a&&d.push({label:'Remove',cssClass:'btn btn-danger',action:function(f){f.close(),'function'==typeof b&&b(null)}}),d.push({label:'Cancel',cssClass:'btn btn-default',action:function(f){f.close(),'function'==typeof noCallback&&noCallback()}}),BootstrapDialog.show({type:BootstrapDialog.TYPE_INFO,title:'Select skill to assign',draggable:!0,message:function(f){var g=$('<ul>').addClass(['liststyle-none','width-max-fit']);for(var h in window.SkillCore.ActiveSkillList)window.SkillCore.ActiveSkillList.hasOwnProperty(h)&&(get=window.SkillCore.ActiveSkillList[h].Visible)&&(get=window.SkillCore.ActiveSkillList[h].IsAssignable)&&0<(get=window.SkillCore.ActiveSkillList[h].CurrentSkillLevel)&&g.append($('<li>').append($('<button>').attr('type','button').addClass(['btn','btn-primary','btn-xs']).append($('<ul>').addClass(['clickthrough','list-inline','ul-flexible','text-noselect']).append([$('<li>').addClass('image').append($('<img>').attr('src',get=window.SkillCore.ActiveSkillList[h].IconURL)),$('<li>').addClass('name').text(get=window.SkillCore.ActiveSkillList[h].Name),$('<li>').addClass('level').text('Lv: '+(get=window.SkillCore.ActiveSkillList[h].CurrentSkillLevel)+'/'+(get=window.SkillCore.ActiveSkillList[h].MaxLevel))]))).click(function(j){j.preventDefault(),g.find('button.active').removeClass(['btn-success','active']).addClass('btn-primary'),$(this).find('button').removeClass('btn-primary').addClass(['active','btn-success']),f.setData('selectedskillid',$(this).attr('skillid'))}).dblclick(function(j){j.preventDefault(),f.close(),'function'==typeof b&&b($(this).attr('skillid'))}).attr('skillid',h));return $('<div>').addClass(['skill-list-select','text-black']).append(g)},buttons:d})}}class GridInfo{constructor(){this.IsEmpty=!0,this.SkillInfo=null,this.myDiv=null}Redraw(){this.myDiv&&(this.myDiv.empty(),this.IsEmpty?(this.myDiv.append($('<img>').addClass('clickthrough').attr('src','../skillicons/skillslot_empty_null.png')),this.myDiv.attr('title','Click the box to select skill')):(this.myDiv.append($('<img>').addClass('clickthrough').attr('src',get=this.SkillInfo.IconURL)),this.myDiv.attr('title','Skill: '+(get=this.SkillInfo.Name)+'\nClick the box to select skill')))}SetSkill(a){a?(this.IsEmpty=!1,this.SkillInfo=a):(this.IsEmpty=!0,this.SkillInfo=null),this.Redraw()}UnsetSkill(){this.SetSkill(null)}GetRender(){var a=this;return this.myDiv=$('<div>').addClass('slotskillimg').click(function(b){b.preventDefault(),ShowSkillSelection(!a.IsEmpty,function(c){c?a.SetSkill(window.SkillCore.SkillList[c]):a.UnsetSkill()})}),this.IsEmpty?(this.myDiv.append($('<img>').addClass('clickthrough').attr('src','../skillicons/skillslot_empty_null.png')),this.myDiv.attr('title','Click the box to select skill')):(this.myDiv.append($('<img>').addClass('clickthrough').attr('src',get=this.SkillInfo.IconURL)),this.myDiv.attr('title','Skill: '+(get=this.SkillInfo.Name)+'\nClick the box to select skill')),this.myDiv}}function ShowSkillSelection(a,b){if(window.SkillCore){var d=[{label:'Select',cssClass:'btn btn-success',action:function(f){f.close(),'function'==typeof b&&b(f.getData('selectedskillid'))}}];a&&d.push({label:'Remove',cssClass:'btn btn-danger',action:function(f){f.close(),'function'==typeof b&&b(null)}}),d.push({label:'Cancel',cssClass:'btn btn-default',action:function(f){f.close(),'function'==typeof noCallback&&noCallback()}}),BootstrapDialog.show({type:BootstrapDialog.TYPE_INFO,title:'Select skill to assign',draggable:!0,message:function(f){var g=$('<ul>').addClass(['liststyle-none','width-max-fit']);for(var h in window.SkillCore.ActiveSkillList)window.SkillCore.ActiveSkillList.hasOwnProperty(h)&&(get=window.SkillCore.ActiveSkillList[h].Visible)&&(get=window.SkillCore.ActiveSkillList[h].IsAssignable)&&0<(get=window.SkillCore.ActiveSkillList[h].CurrentSkillLevel)&&g.append($('<li>').append($('<button>').attr('type','button').addClass(['btn','btn-primary','btn-xs']).append($('<ul>').addClass(['clickthrough','list-inline','ul-flexible','text-noselect']).append([$('<li>').addClass('image').append($('<img>').attr('src',get=window.SkillCore.ActiveSkillList[h].IconURL)),$('<li>').addClass('name').text(get=window.SkillCore.ActiveSkillList[h].Name),$('<li>').addClass('level').text('Lv: '+(get=window.SkillCore.ActiveSkillList[h].CurrentSkillLevel)+'/'+(get=window.SkillCore.ActiveSkillList[h].MaxLevel))]))).click(function(j){j.preventDefault(),g.find('button.active').removeClass(['btn-success','active']).addClass('btn-primary'),$(this).find('button').removeClass('btn-primary').addClass(['active','btn-success']),f.setData('selectedskillid',$(this).attr('skillid'))}).dblclick(function(j){j.preventDefault(),f.close(),'function'==typeof b&&b($(this).attr('skillid'))}).attr('skillid',h));return $('<div>').addClass(['skill-list-select','text-black']).append(g)},buttons:d})}}class GridInfo{constructor(){this.IsEmpty=!0,this.SkillInfo=null,this.myDiv=null}Redraw(){this.myDiv&&(this.myDiv.empty(),this.IsEmpty?(this.myDiv.append($('<img>').addClass('clickthrough').attr('src','../skillicons/skillslot_empty_null.png')),this.myDiv.attr('title','Click the box to select skill')):(this.myDiv.append($('<img>').addClass('clickthrough').attr('src',get=this.SkillInfo.IconURL)),this.myDiv.attr('title','Skill: '+(get=this.SkillInfo.Name)+'\nClick the box to select skill')))}SetSkill(a){a?(this.IsEmpty=!1,this.SkillInfo=a):(this.IsEmpty=!0,this.SkillInfo=null),this.Redraw()}UnsetSkill(){this.SetSkill(null)}GetRender(){var a=this;return this.myDiv=$('<div>').addClass('slotskillimg').click(function(b){b.preventDefault(),ShowSkillSelection(!a.IsEmpty,function(c){c?a.SetSkill(window.SkillCore.SkillList[c]):a.UnsetSkill()})}),this.IsEmpty?(this.myDiv.append($('<img>').addClass('clickthrough').attr('src','../skillicons/skillslot_empty_null.png')),this.myDiv.attr('title','Click the box to select skill')):(this.myDiv.append($('<img>').addClass('clickthrough').attr('src',get=this.SkillInfo.IconURL)),this.myDiv.attr('title','Skill: '+(get=this.SkillInfo.Name)+'\nClick the box to select skill')),this.myDiv}}