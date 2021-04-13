using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class ScoreSceneScript : MonoBehaviour
{
    public Text PlayerScoreText;

    // Start is called before the first frame update
    void Start()
    {
        PlayerScoreText.text = "Score: " + PlayerPrefs.GetInt("PlayerScore").ToString();

    }
}
