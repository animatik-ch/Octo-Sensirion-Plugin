# __init__.py

def __plugin_load__():
    global __plugin_implementation__
    __plugin_implementation__ = OctoSensirionPlugin()

    global __plugin_hooks__
    __plugin_hooks__ = {
        "octoprint.plugin.softwareupdate.check_config": __plugin_implementation__.get_update_information,
        "octoprint.plugin.template_configs": __plugin_implementation__.get_template_configs
    }

class OctoSensirionPlugin:
    def __init__(self):
        # Add compatibility specification here
        self.compatibility = ">=3.9,<4"

    def get_update_information(self):
        return dict(
            octo_sensirion_plugin=dict(
                displayName="Octo Sensirion Plugin",
                displayVersion="1.0.0",
                type="github_release",
                user="your-github-username",
                repo="your-github-repo",
                current="1.0.0",
                pip="https://github.com/your-github-username/your-github-repo/archive/1.0.0.zip"
            )
        )

    def get_template_configs(self):
        return [
            dict(type="navbar", custom_bindings=False),
            dict(type="settings", custom_bindings=False),
            dict(type="tab", name="Octo Sensirion", template="plugins/Octo_Sensirion_Plugin/templates/Octo_Sensirion_template.html", custom_bindings=False),
        ]
