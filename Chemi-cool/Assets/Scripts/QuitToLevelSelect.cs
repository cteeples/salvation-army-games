using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.SceneManagement;

public class QuitToLevelSelect : MonoBehaviour
{
    // Grab input to see if quit button was pressed & return to level selection
    void Update()
    {
        if(Input.GetKeyDown(KeyCode.Q)){
        SceneManager.LoadScene("LevelSelect");
}
    }
}
