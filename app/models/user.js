import DS from "ember-data";

export default DS.Model.extend({
  login: DS.attr("string"),
  name: DS.attr(),
  publicRepos: DS.attr("number")
});
