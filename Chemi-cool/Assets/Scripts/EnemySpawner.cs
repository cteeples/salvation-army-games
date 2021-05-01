using System.Collections;
using System.Collections.Generic;
using UnityEngine.SceneManagement;
using UnityEngine;

public class EnemySpawner : MonoBehaviour
{
    /*  From the pool of enemies "enemies", generate a new instance of an element
        For each enemy "newEnemy" we mark for death at no cost to player as the screen would clutter
        A spawnpoint is selected randomly so the player must move around to attack
        Each level has a set number of max elements that can spawn
    */
    public GameObject[] enemies;
    private GameObject newEnemy;
    public Transform[] spawnPoint;
    public int maxEnemies;
    private int startEnemyNum;

    // when this is true the game over scene will be called
    public bool GameIsOver = false;

    // random vars for Elements and Spawnpoints
    private int randE;
    private int randS;

    // determines spawn intervals
    public float startTimeBTSpawns;
    private float timeBTspawns;

    private void Start()
    {
        timeBTspawns = startTimeBTSpawns;
    }

    private void Update()
    {
        if (timeBTspawns <= 0 && startEnemyNum < maxEnemies )
        {

            randE = Random.Range(0, enemies.Length);
            randS = Random.Range(0, spawnPoint.Length);
            newEnemy = Instantiate(enemies[randE], spawnPoint[randS].transform.position, Quaternion.identity);
            Destroy(newEnemy.gameObject, 12.0f);
            startEnemyNum++;
            timeBTspawns = startTimeBTSpawns;
    
            checkGameEnd(startEnemyNum);
        }

        else
        {
            timeBTspawns -= Time.deltaTime;
        }



    }

    void checkGameEnd(int start)
    {
            if(start == maxEnemies)
            {
                GameIsOver = true;
                StartCoroutine(Countdown());
            }
            
    }

    // wait a bit to ensure player has enough time to kill last enemy if needed
    IEnumerator Countdown()
    {
        yield return new WaitForSeconds(8f);
        SceneManager.LoadScene("GameOver");
    }

}
