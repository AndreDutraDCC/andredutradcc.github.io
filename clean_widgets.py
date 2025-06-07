import nbformat

def clean_widgets(nb_path, out_path):
    nb = nbformat.read(nb_path, as_version=4)
    # Remove notebook-level widget metadata
    if "widgets" in nb.get("metadata", {}):
        del nb["metadata"]["widgets"]

    for cell in nb.cells:
        # Remove cell-level widget metadata
        if "widgets" in cell.get("metadata", {}):
            del cell["metadata"]["widgets"]
        # Clean outputs
        if "outputs" in cell:
            new_outputs = []
            for output in cell["outputs"]:
                # Remove widget data from output data
                if "data" in output:
                    output["data"].pop("application/vnd.jupyter.widget-view+json", None)
                    output["data"].pop("application/vnd.jupyter.widget-state+json", None)
                # Remove outputs that are only widget views
                if (
                    "data" in output and
                    not output["data"]  # empty data after pop
                ):
                    continue
                new_outputs.append(output)
            cell["outputs"] = new_outputs

    nbformat.write(nb, out_path)

clean_widgets("NLP_1_clean.ipynb", "NLP_1_cleaned.ipynb")