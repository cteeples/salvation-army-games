using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

// Grabs score from prefs and displays for user
// TODO: add high scores for each level
public class ScoreSceneScript : MonoBehaviour
{
    public Text PlayerScoreText;

    void Start()
    {
        PlayerScoreText.text = "Score: " + PlayerPrefs.GetInt("PlayerScore").ToString();

    }
}
