using System.Collections;
using System.Collections.Generic;
using UnityEngine;

// Used to kill app when Exit is chosen on Main Menu
public class QuitGame : MonoBehaviour
{
    public void QuitGamePressed()
    {
        Application.OpenURL("about:blank");
    }

}
