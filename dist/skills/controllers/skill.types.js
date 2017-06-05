/**
 * Created by Julius Alvarado on 12/29/2016.
 */
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var JuliusSkillsApp;
(function (JuliusSkillsApp) {
    var SkillType = (function () {
        function SkillType() {
            this.designCategoryType = "Design";
            this.frontendCategoryType = "Front End";
            this.backendCategoryType = "Back End";
            this.databaseCategoryType = "Database";
        }
        return SkillType;
    }());
    JuliusSkillsApp.SkillType = SkillType;
    var FrontEndSkillType = (function (_super) {
        __extends(FrontEndSkillType, _super);
        function FrontEndSkillType() {
            _super.apply(this, arguments);
            // maybe make this an array?
            this.specialty = ": html, css, & javascript";
        }
        FrontEndSkillType.prototype.skillCategoryType = function () {
            return this.frontendCategoryType + this.specialty;
        };
        return FrontEndSkillType;
    }(SkillType));
    JuliusSkillsApp.FrontEndSkillType = FrontEndSkillType;
})(JuliusSkillsApp || (JuliusSkillsApp = {}));
//\\ 
//# sourceMappingURL=skill.types.js.map