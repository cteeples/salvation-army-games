using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;


public class Clicker : MonoBehaviour
{
    // Level name is entered here through editor
    public string LevelElement;

    // Score is collected and updated on screen
    // TODO: Color change text depending on whether correct element was hit
    public Text ScoreText;
    public int Score;

    void Update()
    {
        if(Input.GetMouseButtonDown(0))
        {
            // Raycast used to determine if entities are hit
            Ray ray = Camera.main.ScreenPointToRay(Input.mousePosition);

            RaycastHit2D hit = Physics2D.GetRayIntersection(ray);
            if(hit.collider != null)
            {
                // Activate kill interface
                Kill_Interface click = hit.collider.GetComponent<Kill_Interface>();
                if(click != null) click.onClickAction();
                //Debug.Log("hit collider " + hit.collider.tag);

                // if correct, add score
                if(hit.collider.tag == LevelElement)
                {
                    Score += 200;
                    PlayerPrefs.SetInt("PlayerScore", Score);
                }

                // if incorrect, deduct score
                else
                {
                    Score -= 100;
                    PlayerPrefs.SetInt("PlayerScore", Score);
                }

                // update score text
                ScoreText.text = "Score: " + Score.ToString();
            }
        }
    }

}
